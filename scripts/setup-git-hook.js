#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const GIT_HOOKS_DIR = path.join(__dirname, '..', '.git', 'hooks');
const POST_COMMIT_HOOK = path.join(GIT_HOOKS_DIR, 'post-commit');

// Git hooks 디렉토리 확인 및 생성
if (!fs.existsSync(GIT_HOOKS_DIR)) {
  console.error('❌ .git/hooks 디렉토리를 찾을 수 없습니다.');
  console.error('현재 디렉토리가 Git 저장소인지 확인해주세요.');
  process.exit(1);
}

// post-commit hook 생성
const hookContent = `#!/bin/sh
# Git post-commit hook - README 자동 업데이트

# 커밋 메시지가 "chore: update README"로 시작하면 스킵 (무한 루프 방지)
COMMIT_MSG=$(git log -1 --pretty=%B)
if echo "$COMMIT_MSG" | grep -q "^chore: update README"; then
  exit 0
fi

# README 업데이트 스크립트 실행
node scripts/update-readme.js

# 업데이트된 파일들을 staging에 추가
git add README.md package.json

# 자동 커밋 (선택사항 - 주석 해제하면 자동 커밋)
# git commit --amend --no-edit --no-verify
`;

try {
  fs.writeFileSync(POST_COMMIT_HOOK, hookContent, { mode: 0o755 });
  console.log('✅ Git post-commit hook이 설정되었습니다!');
  console.log('');
  console.log('이제 커밋할 때마다 자동으로:');
  console.log('  1. package.json의 버전이 업데이트됩니다');
  console.log('  2. README.md에 커밋 내역이 추가됩니다');
  console.log('');
  console.log('⚠️  주의: README와 package.json이 자동으로 staging에 추가됩니다.');
  console.log('   다음 커밋에 포함시키려면 "git add README.md package.json" 후 커밋하세요.');
} catch (error) {
  console.error('❌ Git hook 설정 실패:', error.message);
  process.exit(1);
}
