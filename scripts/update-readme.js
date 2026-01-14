#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 파일 경로
const README_PATH = path.join(__dirname, '..', 'README.md');
const PACKAGE_JSON_PATH = path.join(__dirname, '..', 'package.json');

// 버전 증가 규칙
const VERSION_RULES = {
  'feat': 'minor',      // 마이너 버전 증가 (1.0.0 -> 1.1.0)
  'fix': 'patch',       // 패치 버전 증가 (1.0.0 -> 1.0.1)
  'refactor': 'patch',  // 패치 버전 증가
  'perf': 'patch',      // 패치 버전 증가
  'style': 'patch',     // 패치 버전 증가
  'docs': 'patch',      // 패치 버전 증가
  'chore': 'patch',     // 패치 버전 증가
  'test': 'patch',      // 패치 버전 증가
};

// 버전 파싱 및 증가
function incrementVersion(version, type, commitMessage) {
  const [major, minor, patch] = version.split('.').map(Number);
  
  // 첫 배포 감지: 0.x.x 버전에서 "배포", "deploy", "production" 키워드가 있으면 1.0.0으로
  if (major === 0) {
    const deployKeywords = /배포|deploy|production|release|출시/i;
    if (deployKeywords.test(commitMessage)) {
      return '1.0.0';
    }
  }
  
  // 0.0.1에서 첫 배포로 간주
  if (major === 0 && minor === 0 && patch === 0) {
    return '1.0.0';
  }
  
  switch (type) {
    case 'major':
      return `${major + 1}.0.0`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    case 'patch':
      return `${major}.${minor}.${patch + 1}`;
    default:
      return version;
  }
}

// 커밋 메시지에서 타입 추출
function getCommitType(message) {
  const match = message.match(/^(feat|fix|refactor|perf|style|docs|chore|test)(\(.+\))?:/i);
  if (match) {
    return match[1].toLowerCase();
  }
  return null;
}

// 최신 커밋 정보 가져오기
function getLatestCommit() {
  try {
    const hash = execSync('git rev-parse HEAD', { encoding: 'utf-8' }).trim();
    const message = execSync('git log -1 --pretty=%B', { encoding: 'utf-8' }).trim();
    const date = execSync('git log -1 --pretty=%cd --date=short', { encoding: 'utf-8' }).trim();
    return { hash, message, date };
  } catch (error) {
    console.error('Error getting commit info:', error.message);
    return null;
  }
}

// README 읽기
function readREADME() {
  try {
    return fs.readFileSync(README_PATH, 'utf-8');
  } catch (error) {
    console.error('Error reading README:', error.message);
    return null;
  }
}

// package.json 읽기/쓰기
function readPackageJSON() {
  try {
    const content = fs.readFileSync(PACKAGE_JSON_PATH, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error('Error reading package.json:', error.message);
    return null;
  }
}

function writePackageJSON(data) {
  try {
    fs.writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(data, null, 2) + '\n', 'utf-8');
    return true;
  } catch (error) {
    console.error('Error writing package.json:', error.message);
    return false;
  }
}

// README 업데이트
function updateREADME(commit, newVersion) {
  const readme = readREADME();
  if (!readme) return false;

  const commitType = getCommitType(commit.message);
  const versionType = commitType ? VERSION_RULES[commitType] : 'patch';
  
  // 버전별 개발 기록 섹션 찾기
  const versionSectionRegex = /(## 📅 버전별 개발 기록\s*\n)/;
  const match = readme.match(versionSectionRegex);
  
  if (!match) {
    console.error('버전별 개발 기록 섹션을 찾을 수 없습니다.');
    console.error('README 내용 확인 중...');
    const lines = readme.split('\n');
    const versionLineIndex = lines.findIndex(line => line.includes('버전별 개발 기록'));
    if (versionLineIndex !== -1) {
      console.error(`찾은 라인: ${lines[versionLineIndex]}`);
    }
    return false;
  }

  const insertIndex = match.index + match[0].length;
  
  // 커밋 메시지에서 타입 제거 (이미 표시되므로)
  let commitMessage = commit.message;
  const typeMatch = commitMessage.match(/^(feat|fix|refactor|perf|style|docs|chore|test)(\(.+\))?:\s*(.+)/i);
  if (typeMatch && typeMatch[3]) {
    commitMessage = typeMatch[3].trim();
  }

  // 새로운 버전 섹션 생성
  const commitTypeLabel = {
    'feat': '✨ 기능 추가',
    'fix': '🐛 버그 수정',
    'refactor': '♻️ 리팩토링',
    'perf': '⚡ 성능 개선',
    'style': '💄 스타일 변경',
    'docs': '📝 문서 수정',
    'chore': '🔧 기타',
    'test': '✅ 테스트',
  }[commitType] || '📝 변경사항';

  const newVersionSection = `### v${newVersion} (${commit.date})

#### ${commitTypeLabel}
- ✅ ${commitMessage}

---

`;

  // README 업데이트
  const updatedREADME = readme.slice(0, insertIndex) + newVersionSection + readme.slice(insertIndex);
  
  try {
    fs.writeFileSync(README_PATH, updatedREADME, 'utf-8');
    console.log(`✅ README 업데이트 완료: v${newVersion}`);
    return true;
  } catch (error) {
    console.error('Error writing README:', error.message);
    return false;
  }
}

// 메인 실행
function main() {
  const commit = getLatestCommit();
  if (!commit) {
    console.error('커밋 정보를 가져올 수 없습니다.');
    process.exit(1);
  }

  const packageJson = readPackageJSON();
  if (!packageJson) {
    console.error('package.json을 읽을 수 없습니다.');
    process.exit(1);
  }

  const currentVersion = packageJson.version || '0.0.1';
  const commitType = getCommitType(commit.message);
  
  if (!commitType) {
    console.log('⚠️  커밋 메시지에 타입이 없습니다. 패치 버전으로 증가합니다.');
  }

  const versionType = commitType ? VERSION_RULES[commitType] : 'patch';
  const newVersion = incrementVersion(currentVersion, versionType, commit.message);

  // package.json 버전 업데이트
  packageJson.version = newVersion;
  if (!writePackageJSON(packageJson)) {
    console.error('package.json 업데이트 실패');
    process.exit(1);
  }

  console.log(`📦 버전 업데이트: ${currentVersion} -> ${newVersion}`);

  // README 업데이트
  if (!updateREADME(commit, newVersion)) {
    console.error('README 업데이트 실패');
    process.exit(1);
  }

  console.log('✅ 모든 업데이트 완료!');
}

main();
