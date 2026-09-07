# Portfolio — Run & Deploy Guide

This project has two independent parts, each with its own folder, `package.json`, and `.env`:

| Part | Folder | Purpose |
|------|--------|---------|
| **Frontend** | `frontend/` | React + Vite website |
| **Backend** | `backend/` | Express API — saves contact form messages to MongoDB |

They are deployed separately (e.g. frontend on Vercel/Netlify, backend on Render/Railway).

---

## Prerequisites

- [Node.js](https://nodejs.org/) **v18+** (v20+ recommended)
- A MongoDB connection string — free cluster at [cloud.mongodb.com](https://cloud.mongodb.com)
- [Git](https://git-scm.com/) (optional, for deployment)

---

## 1. First-time setup

Install each side's dependencies separately:

```bash
cd frontend && npm install
cd ../backend && npm install
```

### Add your photo

Replace the placeholder with your own image:

```
frontend/public/images/profile.jpg
```

Recommended: portrait JPG/WebP, at least **800×1000 px**.

### Customize your content

Edit these files inside `frontend/`:

| File | What to change |
|------|----------------|
| `src/data/siteConfig.js` | Name, email, bio, social links, stats |
| `src/data/projects.js` | Projects, demo/GitHub URLs |
| `src/data/skills.js` | Skills and levels |
| `src/data/experience.js` | Jobs and education |

---

## 2. Environment files (one per folder)

**`backend/.env`**

```env
PORT=5000
CLIENT_URL=http://localhost:5173
MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
```

**`frontend/.env`**

```env
# Leave empty locally — vite.config.js proxies /api to http://localhost:5000
# In production, set to your deployed backend URL (no trailing slash, no /api suffix)
VITE_API_URL=
```

> Both `.env` files are gitignored — never commit them.

---

## 3. Run locally (development)

Open two terminals:

```bash
# Terminal 1 — backend
cd backend
npm run dev
```

```bash
# Terminal 2 — frontend
cd frontend
npm run dev
```

| Service | URL |
|---------|-----|
| Website | http://localhost:5173 |
| API | http://localhost:5000 |

### Test the contact form

1. Open the site and go to the **Contact** section.
2. Submit the form.
3. Check MongoDB Atlas → your cluster → Browse Collections → `contacts`.

---

## 4. Production build (test before deploy)

```bash
cd frontend
npm run build      # outputs to frontend/dist/
npm run preview
```

> For the contact form to work in preview, run the backend separately and set `VITE_API_URL=http://localhost:5000` in `frontend/.env` before building.

---

## 5. Deploy the backend

### Recommended: [Render](https://render.com) (free tier)

1. Push your code to **GitHub**.
2. On Render → **New** → **Web Service** → connect your repo.
3. Settings:

| Setting | Value |
|---------|--------|
| **Root Directory** | `backend` |
| **Runtime** | Node |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |

4. **Environment variables**:

| Key | Value |
|-----|--------|
| `MONGO_URI` | Your MongoDB connection string |
| `CLIENT_URL` | Your live frontend URL, e.g. `https://your-portfolio.vercel.app` |
| `PORT` | Leave blank — Render sets this automatically |

5. Deploy. Copy your API URL, e.g. `https://portfolio-api.onrender.com`

### Verify the API

```
https://YOUR-API-URL/api/health
```

Should return: `{ "ok": true, "database": "mongodb", "timestamp": "..." }`

---

## 6. Deploy the frontend

### Recommended: [Vercel](https://vercel.com)

1. Import your GitHub repo on Vercel.
2. Framework preset: **Vite**
3. Settings:

| Setting | Value |
|---------|--------|
| **Root Directory** | `frontend` |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |

4. **Environment variables**:

| Key | Value |
|-----|--------|
| `VITE_API_URL` | Your live backend URL, e.g. `https://portfolio-api.onrender.com` |

5. Deploy.

> `frontend/vercel.json` fixes SPA **404** errors on page refresh by routing all paths to `index.html`.

---

## 7. After deployment checklist

- [ ] Website loads at your live URL
- [ ] Profile photo shows
- [ ] `VITE_API_URL` (frontend) points to the live backend, no trailing slash
- [ ] `CLIENT_URL` (backend) matches your live frontend URL exactly, no trailing slash
- [ ] `MONGO_URI` (backend) is set on the backend host
- [ ] `/api/health` on the backend returns `"ok": true`
- [ ] Contact form submits successfully
- [ ] Message appears in MongoDB Atlas → Browse Collections → `contacts`

---

## 8. Common issues

**CORS error** — `CLIENT_URL` on the backend must exactly match the frontend's URL (including `https://`, no trailing slash). Update and redeploy the backend.

**Contact form fails after deploy** — Check `VITE_API_URL` is the full backend URL with no `/api` suffix, and check DevTools → Network for the actual error.

**MongoDB connection failed** — Confirm the connection string, that your IP/Render's IP is allow-listed in Atlas (or set to allow all: `0.0.0.0/0`), and check the backend's logs.

---

## 9. Project structure

```
portfolio-web/
├── frontend/                 ← React + Vite website
│   ├── public/images/profile.jpg
│   ├── src/
│   ├── vercel.json
│   ├── .env
│   └── package.json
├── backend/                  ← Express API + MongoDB
│   ├── db/
│   ├── routes/
│   ├── index.js
│   ├── .env
│   └── package.json
└── docs/
    └── RUN-AND-DEPLOY.md     ← This file
```
