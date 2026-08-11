# 🍃 Aakash Portfolio — Standalone Java Spring Boot Backend

This directory contains the standalone **Java 17+ Spring Boot 3.x** REST backend microservice for the portfolio website (`aksKrIITK.github.io`). It provides REST endpoints for contact form submissions, health monitoring, request validation, and asynchronous forwarding to Google Sheets via Apps Script Webhook.

---

## 🛠️ Local Development & Running

### Prerequisites
- **Java JDK 17** or higher
- **Apache Maven 3.8+** (or use Maven wrapper)

### Run Spring Boot Locally
1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Run Spring Boot:**
   ```bash
   mvn spring-boot:run
   ```
   *Or on Windows Powershell:*
   ```powershell
   .\mvnw spring-boot:run
   ```

3. **Verify the server is running:**
   - **Root Info:** `http://localhost:5000/`
   - **Health Metrics:** `http://localhost:5000/api/health`
   - **Contact Endpoint:** `POST http://localhost:5000/api/contact`

---

## ⚙️ Environment Configuration

You can override configuration using environment variables or `src/main/resources/application.properties`:

| Environment Variable | Default Value | Description |
| :--- | :--- | :--- |
| `PORT` | `5000` | Port for Spring Boot Tomcat server |
| `GOOGLE_SHEETS_WEBHOOK_URL` | *(empty)* | Google Apps Script Webhook URL |
| `ALLOWED_ORIGINS` | `http://localhost:5173,https://akskriitk.github.io` | Comma-separated allowed CORS origins |

Example environment export:
```bash
export PORT=5000
export GOOGLE_SHEETS_WEBHOOK_URL="https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
export ALLOWED_ORIGINS="https://akskriitk.github.io,http://localhost:5173"
```

---

## 🐳 Docker Deployment

Build and run using Docker:

```bash
# Build Docker image
docker build -t portfolio-backend .

# Run Docker container
docker run -p 5000:5000 -e GOOGLE_SHEETS_WEBHOOK_URL="your_webhook_url" portfolio-backend
```

---

## 🌐 Cloud Deployment Options

### Option A: Render (Recommended — Docker Web Service)
1. Go to [Render Dashboard](https://dashboard.render.com/) -> **New +** -> **Web Service**.
2. Connect your GitHub repository (`aksKrIITK.github.io`).
3. Select **Docker** environment and set:
   - **Root Directory**: `backend`
   - **Dockerfile Path**: `Dockerfile` (or `backend/Dockerfile`)
   - **Health Check Path**: `/api/health`
4. Add Environment Variables:
   - `GOOGLE_SHEETS_WEBHOOK_URL`: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`
   - `ALLOWED_ORIGINS`: `https://akskriitk.github.io`
5. Click **Create Web Service**. Render will build the Maven project and launch the JVM container!

---

### Option B: Railway / AWS / Heroku
- **Railway**: Connect repo and set root directory to `backend`. Railway will use the `Dockerfile` automatically.
- **Heroku**: Uses `Procfile` (`web: java -Dserver.port=$PORT -jar target/portfolio-backend-1.0.0.jar`).

---

## 🔗 Connecting Frontend to Spring Boot Backend

Set your frontend environment variable `VITE_BACKEND_API_URL` to point to your live Spring Boot API:
```env
VITE_BACKEND_API_URL=https://portfolio-backend.onrender.com/api/contact
```
