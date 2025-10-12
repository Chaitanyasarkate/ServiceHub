# 🚀 ServiceHub - Getting Started Guide

## Complete Setup & Deployment Instructions

### 📋 Prerequisites

Before you begin, ensure you have:

1. **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
2. **MongoDB Atlas Account** - [Sign up here](https://www.mongodb.com/atlas) (recommended)
3. **Git** (optional, for version control)

### 🛠 Quick Setup (Windows)

**Option 1: Automated Setup**
```bash
# Run the quick start script
quick-start.bat
```

**Option 2: Manual Setup**
```bash
# 1. Install dependencies
npm install
cd client && npm install && cd ..

# 2. Create environment file
copy env.example .env

# 3. Start development server
npm run dev
```

### 🛠 Quick Setup (Mac/Linux)

**Option 1: Automated Setup**
```bash
# Make script executable and run
chmod +x quick-start.sh
./quick-start.sh
```

**Option 2: Manual Setup**
```bash
# 1. Install dependencies
npm install
cd client && npm install && cd ..

# 2. Create environment file
cp env.example .env

# 3. Start development server
npm run dev
```

## 🔧 Environment Configuration

### 1. Edit `.env` file:

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/servicehub

# JWT Secret (generate a secure random string)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Server Configuration
PORT=5000
NODE_ENV=development
```

### 2. MongoDB Atlas Setup:

1. **Create Account**: Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. **Create Cluster**: Choose the free tier
3. **Database Access**: Create a database user
4. **Network Access**: Add `0.0.0.0/0` for all IPs
5. **Get Connection String**: Copy and update `MONGODB_URI`

## 🚀 Start Development

```bash
# Start both frontend and backend
npm run dev
```

**Access your application:**
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 🌐 Production Deployment

### Vercel Deployment

#### 1. Install Vercel CLI
```bash
npm i -g vercel
```

#### 2. Deploy Backend
```bash
# Login to Vercel
vercel login

# Deploy backend
vercel --prod
```

#### 3. Deploy Frontend
```bash
# Deploy frontend
cd client
vercel --prod
```

#### 4. Set Environment Variables

**In Vercel Dashboard (Backend):**
- `MONGODB_URI`: Your MongoDB Atlas connection string
- `JWT_SECRET`: Secure JWT secret
- `NODE_ENV`: production

**In Vercel Dashboard (Frontend):**
- `REACT_APP_API_URL`: Your backend API URL

## 🎯 First Steps After Deployment

### 1. Create Admin User
1. Register a regular account
2. Go to MongoDB Atlas dashboard
3. Find the user in the `users` collection
4. Update the `role` field to `"admin"`

### 2. Test the Platform
1. **Register** as a service seeker
2. **Register** as a service provider
3. **Approve** the provider (as admin)
4. **Test** search, chat, and reviews

## 📱 Platform Features

### For Service Seekers
- ✅ Browse and search service providers
- ✅ View detailed provider profiles
- ✅ Chat with providers in real-time
- ✅ Rate and review providers
- ✅ Report issues through grievance system

### For Service Providers
- ✅ Create detailed service profiles
- ✅ Showcase skills and experience
- ✅ Upload portfolio and certifications
- ✅ Set availability and rates
- ✅ Communicate with potential clients

### For Administrators
- ✅ Approve/reject provider applications
- ✅ Monitor platform activity
- ✅ Resolve user grievances
- ✅ View analytics and insights
- ✅ Manage user accounts

## 🔧 Troubleshooting

### Common Issues

**1. Port Already in Use**
```bash
# Kill process on port 5000
npx kill-port 5000
```

**2. MongoDB Connection Failed**
- Check your connection string
- Verify network access settings
- Ensure database user has correct permissions

**3. Build Errors**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**4. Environment Variables Not Working**
- Check variable names match exactly
- Restart the development server
- Verify `.env` file is in the root directory

### Development Commands

```bash
# Start development server
npm run dev

# Start only backend
npm run server

# Start only frontend
npm run client

# Build for production
npm run build

# Install all dependencies
npm run install-all
```

## 📊 Monitoring & Analytics

### Development
- Check browser console for errors
- Monitor network requests
- Use React Developer Tools

### Production
- Vercel Analytics dashboard
- MongoDB Atlas monitoring
- Application performance metrics

## 🎉 Success!

Your ServiceHub platform is now ready! 

**What you can do:**
1. **Register** users and providers
2. **Browse** services and providers
3. **Chat** in real-time
4. **Manage** the platform as admin
5. **Scale** as your user base grows

**Platform URLs:**
- Frontend: Your Vercel frontend URL
- Backend: Your Vercel backend URL
- Admin: Frontend URL + /admin

## 📞 Support

If you encounter any issues:
1. Check the console for error messages
2. Verify all environment variables are set
3. Ensure MongoDB is accessible
4. Check Vercel deployment logs
5. Review the troubleshooting section above

**Happy coding! 🚀**

---

*ServiceHub - Connecting service seekers with verified providers*
