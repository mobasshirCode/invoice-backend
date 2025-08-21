# Note :
pdf download will not work as deployment in vercel does fails the puppeteer download process.

## ⚙️ Backend Setup

### 1️⃣ Clone the backend repo
Note : clone the repo before "changes for vercel" commit, as i had to make few tweaks bofore vercel could work with it.
```bash
git clone https://github.com/mobasshirCode/invoice-backend
cd backend
```
### 2️⃣ Backend Setup
```bash
cd backend
npm install
```
Create .env in backend/:
```bash
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
```

## Live Preview
https://invoice-frontend-taupe.vercel.app/
