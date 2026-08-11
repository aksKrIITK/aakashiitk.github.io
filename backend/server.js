const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS for standalone deployment
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map((o) => o.trim())
  : [
      'http://localhost:5173',
      'http://localhost:3000',
      'http://127.0.0.1:5173',
      'https://akskriitk.github.io',
      process.env.FRONTEND_URL,
    ].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, or server-to-server)
      if (!origin || allowedOrigins.includes('*') || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(null, true); // Permissive fallback to support cross-origin frontend
    },
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json());

// Root endpoint info
app.get('/', (req, res) => {
  res.json({
    name: 'Aakash Portfolio Standalone Backend API',
    status: 'online',
    version: '1.0.0',
    documentation: 'See GET /api/health for system diagnostic details.',
    endpoints: {
      health: 'GET /api/health',
      contact: 'POST /api/contact',
    },
    timestamp: new Date().toISOString(),
  });
});

// Health check endpoint for monitoring & deployment checks (Render / Railway / AWS / Docker)
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'portfolio-backend',
    uptimeSeconds: Math.floor(process.processUptime ? process.uptime() : 0),
    memoryUsageMB: Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100,
    environment: process.env.NODE_ENV || 'development',
    googleSheetsConfigured: Boolean(process.env.GOOGLE_SHEETS_WEBHOOK_URL),
    timestamp: new Date().toISOString(),
  });
});

// Contact Form submission endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, projectType, message } = req.body || {};

  // Basic validation
  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ error: 'Valid name is required.' });
  }

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email address is required.' });
  }

  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'Message content cannot be empty.' });
  }

  const payload = {
    timestamp: new Date().toISOString(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    projectType: (projectType && typeof projectType === 'string' ? projectType.trim() : 'General Inquiry'),
    message: message.trim(),
    userAgent: req.headers['user-agent'] || 'Unknown',
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Unknown',
  };

  const googleSheetUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  try {
    if (googleSheetUrl) {
      // Forward submission to Google Apps Script Webhook
      const response = await fetch(googleSheetUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Google Sheets endpoint responded with HTTP ${response.status}`);
      }

      console.log(`✅ Message forwarded to Google Sheets successfully for: ${payload.email}`);
    } else {
      console.log('📬 Contact Submission Received (No GOOGLE_SHEETS_WEBHOOK_URL set):', payload);
    }

    return res.status(200).json({
      success: true,
      message: 'Your message has been processed successfully!',
      timestamp: payload.timestamp,
    });
  } catch (err) {
    console.error('❌ Error processing contact submission:', err.message);
    return res.status(500).json({
      error: 'Failed to process message submission. Please try again later or email directly.',
    });
  }
});

// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    path: req.originalUrl,
  });
});

// Global Error Handler Middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'An unexpected error occurred.',
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Portfolio standalone backend running on port ${PORT}`);
  console.log(`   Health check endpoint: http://localhost:${PORT}/api/health`);
});

module.exports = app;
