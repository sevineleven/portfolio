# 배포 가이드

## 빠른 시작

### 1. Vercel 설정

`vercel.json` 파일을 프로젝트 루트에 생성:

```json
{
  "rewrites": [
    {
      "source": "/blog/:path*",
      "destination": "https://blog-api.sevin.dev/:path*"
    }
  ]
}
```

### 2. EC2 설정

#### Nginx 설정 파일 (`/etc/nginx/sites-available/blog-api.sevin.dev`)

```nginx
server {
    listen 80;
    server_name blog-api.sevin.dev;

    # Spring Boot로 프록시
    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;
        
        # WebSocket 지원 (필요시)
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

#### SSL 인증서 설정

```bash
sudo certbot --nginx -d blog-api.sevin.dev
```

### 3. Spring Boot 설정

#### application.yml

```yaml
server:
  port: 8080
  servlet:
    context-path: /
    forward-headers-strategy: framework

spring:
  application:
    name: blog-api
```

#### CORS 설정 (필요시)

```java
@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                    .allowedOrigins("https://sevin.dev")
                    .allowedMethods("GET", "POST", "PUT", "DELETE")
                    .allowedHeaders("*")
                    .allowCredentials(true);
            }
        };
    }
}
```

---

## 상세 설정

### DNS 설정

1. **서브도메인 생성**: `blog-api.sevin.dev`
2. **A 레코드**: EC2 Elastic IP 주소
3. **TTL**: 300초 (5분)

### 보안 그룹 (EC2)

```
인바운드 규칙:
- HTTP (80) - 0.0.0.0/0
- HTTPS (443) - 0.0.0.0/0
- SSH (22) - Your IP only
- Custom TCP (8080) - 127.0.0.1/32 (로컬만)
```

### Spring Boot systemd 서비스

`/etc/systemd/system/blog-api.service`:

```ini
[Unit]
Description=Blog API Service
After=network.target

[Service]
Type=simple
User=ubuntu
WorkingDirectory=/home/ubuntu/blog
ExecStart=/usr/bin/java -jar /home/ubuntu/blog/blog-api.jar
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

활성화:
```bash
sudo systemctl enable blog-api
sudo systemctl start blog-api
```

---

## 테스트

### 로컬 테스트
```bash
# 포트폴리오
npm run dev

# 블로그 (별도 터미널)
cd blog && ./mvnw spring-boot:run
```

### 프로덕션 테스트
```bash
# Vercel rewrites 테스트
curl https://sevin.dev/blog/api/posts

# EC2 직접 접근 테스트
curl https://blog-api.sevin.dev/api/posts
```

---

## 트러블슈팅

### 문제: CORS 에러
**해결**: Spring Boot CORS 설정 확인

### 문제: 502 Bad Gateway
**해결**: 
1. Spring Boot 서비스 실행 확인
2. Nginx 프록시 설정 확인
3. 포트 번호 확인 (8080)

### 문제: SSL 인증서 오류
**해결**: Certbot 재실행
```bash
sudo certbot renew --dry-run
```
