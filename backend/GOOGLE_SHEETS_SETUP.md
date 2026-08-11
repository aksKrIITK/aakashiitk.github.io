# 📊 Google Sheets Apps Script Webhook Setup Guide

Follow this guide to connect your deployed backend to Google Sheets. Every message submitted from your Vercel frontend will automatically populate a row in your Google Sheet!

---

## Step 1: Create & Prepare Your Google Sheet

1. Go to [Google Sheets](https://sheets.new) and create a new spreadsheet.
2. Name it **"Portfolio Contact Inquiries"**.
3. In **Row 1**, set up the following header columns:

| A | B | C | D | E | F | G |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Timestamp** | **Name** | **Email** | **ProjectType** | **Message** | **UserAgent** | **ClientIP** |

---

## Step 2: Add Google Apps Script Code

1. In your Google Sheet menu bar, click **Extensions** ➔ **Apps Script**.
2. Erase any existing code in `Code.gs` and paste the following script:

```javascript
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getActiveSheet();

    var data = JSON.parse(e.postData.contents);

    var timestamp = data.timestamp || new Date().toISOString();
    var name = data.name || '';
    var email = data.email || '';
    var projectType = data.projectType || 'General Inquiry';
    var message = data.message || '';
    var userAgent = data.userAgent || '';
    var clientIp = data.clientIp || '';

    sheet.appendRow([
      timestamp,
      name,
      email,
      projectType,
      message,
      userAgent,
      clientIp
    ]);

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

3. Click the **💾 Save** icon (or press `Ctrl+S` / `Cmd+S`).

---

## Step 3: Deploy as Web App

1. Click the blue **Deploy** button at the top right ➔ **New deployment**.
2. Click the gear icon next to "Select type" and select **Web app**.
3. Fill in the deployment details:
   - **Description**: `Portfolio Contact Webhook`
   - **Execute as**: `Me (your_email@gmail.com)`
   - **Who has access**: **`Anyone`** *(⚠️ IMPORTANT: Must be set to "Anyone" so your backend can post data without Google login prompts)*
4. Click **Deploy**.
5. Grant access permissions when prompted by Google.
6. **Copy the Web App URL**. It looks like this:
   `https://script.google.com/macros/s/AKfycbx_EXAMPLE_SCRIPT_ID_12345/exec`

---

## Step 4: Configure Deployed Backend (Render / Railway)

1. Go to your backend hosting dashboard (e.g. Render).
2. Go to **Environment Variables**.
3. Add/Update `GOOGLE_SHEETS_WEBHOOK_URL`:
   - **Key**: `GOOGLE_SHEETS_WEBHOOK_URL`
   - **Value**: `https://script.google.com/macros/s/AKfycbx_EXAMPLE_SCRIPT_ID_12345/exec`
4. Save and restart/redeploy the backend.

---

## Step 5: Link Vercel Frontend to Backend

1. In [Vercel Dashboard](https://vercel.com) ➔ Select your Frontend project.
2. Go to **Settings** ➔ **Environment Variables**.
3. Add:
   - **Key**: `VITE_BACKEND_API_URL`
   - **Value**: `https://YOUR-BACKEND-NAME.onrender.com/api/contact`
4. Redeploy your Vercel project (**Deployments** ➔ **Redeploy**).

Now when a user submits the contact form on your Vercel site, it hits your backend and immediately saves to Google Sheets! 🎉
