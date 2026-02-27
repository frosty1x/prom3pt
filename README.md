# PromptShield 🛡️

PromptShield is a professional cybersecurity prompt reframing tool designed for ethical hackers, security researchers, and students. It helps rewrite aggressive or poorly phrased prompts into professional, research-focused language that aligns with responsible disclosure guidelines.

## 🚀 Features

- **Ethical Reframing**: Converts malicious-sounding intent into professional security terminology.
- **AI-Powered**: Uses OpenRouter (DeepSeek Chat) for intelligent prompt restructuring.
- **Safety Layer**: Rule-based sanitization to ensure responsible use.
- **Usage Tracking**: Free tier with 5 daily rewrites (stored locally).
- **Modern UI**: Clean, dark-mode dashboard with glassmorphism design.
- **Ad Integration**: Built-in placeholders for Google AdSense.

## 🛠️ Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**:
   - Copy `.env.example` to `.env.local` (or just `.env` in this environment).
   - Add your [OpenRouter API Key](https://openrouter.ai/keys).
   ```env
   OPENROUTER_API_KEY="your_api_key_here"
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

## 💰 Monetization Roadmap

- **Free Tier**: 5 rewrites per day with ads.
- **Pro Tier ($9/mo)**:
  - Unlimited rewrites.
  - No advertisements.
  - Prompt history saving.
  - Priority AI models.
- **Stripe Integration**: To implement real payments, add `stripe` dependency and create a checkout session in a new API route.

## 🆓 Truly Free Hosting Options

If you want to host PromptShield for **$0/month**, here are your best options:

### 1. Render.com (Free Tier)
- **Type**: Web Service
- **Pros**: Very easy, connects to GitHub.
- **Cons**: The server "sleeps" after 15 mins of inactivity (takes ~30s to wake up). 
- **⚠️ CRITICAL**: Render's free tier has **ephemeral storage**. This means your `promptshield.db` will be **deleted** every time the server restarts. 
- **Solution**: Use this for testing, or switch to an external free database like [Supabase](https://supabase.com) (PostgreSQL) if you want to keep your codes forever.

### 2. Koyeb (Free Tier)
- **Type**: Web Service / Docker
- **Pros**: No "sleeping" (always on), supports Docker.
- **Cons**: Like Render, the free tier storage is not persistent.

### 3. Hugging Face Spaces (Free)
- **Type**: Docker Space
- **Pros**: Always on, completely free, supports Docker.
- **Steps**:
  1. Create a new "Space".
  2. Select "Docker" as the SDK.
  3. Upload your files or connect GitHub.
  4. It will use your `Dockerfile` to build and run.

---

## 🛠️ How to make the Database "Permanent" for Free
To keep your subscription codes forever on a free host, you should move away from SQLite and use a hosted database:

1. **Sign up for [Supabase](https://supabase.com)** (Free PostgreSQL).
2. **Update the code**: I can help you switch from `better-sqlite3` to `pg` (Postgres) if you decide to go this route. This is the only way to have a "Pro" setup for $0.

---

## 🌐 Hosting Recommendations

PromptShield is a full-stack application with a persistent SQLite database. For the best experience, we recommend hosting on platforms that support **Persistent Volumes**.

### 1. Railway.app (Recommended)
- **Why**: Extremely easy to set up, supports Docker, and has a "Volumes" feature to keep your `promptshield.db` safe across restarts.
- **Steps**:
  1. Connect your GitHub repo.
  2. Add a **Volume** and mount it to `/app` (or wherever your DB is).
  3. Add your `OPENROUTER_API_KEY` to the Variables tab.
  4. Railway will automatically detect the `Dockerfile` and deploy.

### 2. Fly.io
- **Why**: High performance and great support for SQLite via volumes.
- **Steps**:
  1. Install Fly CLI.
  2. Run `fly launch`.
  3. Follow prompts to create a volume for the database.
  4. Set secrets using `fly secrets set OPENROUTER_API_KEY=...`.

### 3. Render.com
- **Why**: Simple UI and reliable.
- **Note**: You must use a **Web Service** (not a Static Site) and add a **Persistent Disk** (paid feature) to save your database.

---

## 🚀 Production Build

To prepare the app for production manually:

1. **Build Frontend**:
   ```bash
   npm run build
   ```
2. **Set Environment**:
   ```bash
   export NODE_ENV=production
   ```
3. **Start Server**:
   ```bash
   npm start
   ```

---

## 📢 Google AdSense Integration

1. Sign up for [Google AdSense](https://www.google.com/adsense/).
2. Get your publisher ID and script.
3. Paste the script in `src/components/Layout.tsx` where the comment indicates.
4. Replace the placeholder `AdBanner` components with your actual ad unit code.

## 🧠 Example Prompts

| Input | Output (Reframed) |
|-------|-------------------|
| "How do I hack a website?" | "What are the standard methodologies for performing a web application security assessment?" |
| "Show me how to exploit this SQL bug" | "Can you provide educational guidance on identifying and mitigating SQL injection vulnerabilities?" |
| "I want to bypass this login screen" | "What are the common security weaknesses in authentication mechanisms and how can they be hardened?" |

## ⚖️ Ethics Notice

PromptShield is for educational and responsible security research only. Do not use it to plan or commit illegal activity. Always follow responsible disclosure guidelines.
