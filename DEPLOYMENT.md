# ServiceHub Deployment Guide

## 🚀 Complete Deployment Instructions

### Prerequisites
- Node.js installed ([Download here](https://nodejs.org/))
- MongoDB Atlas account ([Sign up here](https://www.mongodb.com/atlas))
- Vercel account ([Sign up here](https://vercel.com/))
- Git repository (GitHub recommended)

## 📋 Step-by-Step Setup

### 1. Install Dependencies

```bash
# Install all dependencies
npm run setup

# Or manually:
npm install
cd client && npm install && cd ..
```

### 2. Environment Configuration

**Create `.env` file:**
```bash
# Copy the example
cp env.example .env
```

**Edit `.env` with your settings:**
```env
# MongoDB Connection (use MongoDB Atlas for production)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/servicehub

# JWT Secret (generate a secure random string)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Server Configuration
PORT=5000
NODE_ENV=development
```

### 3. MongoDB Atlas Setup

1. **Create MongoDB Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Sign up for free account

2. **Create Cluster**
   - Click "Build a Database"
   - Choose "FREE" tier
   - Select your preferred region
   - Create cluster

3. **Database Access**
   - Go to "Database Access"
   - Click "Add New Database User"
   - Create username and password
   - Set permissions to "Read and write to any database"

4. **Network Access**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Add "0.0.0.0/0" for all IPs (or specific Vercel IPs)

5. **Get Connection String**
   - Go to "Clusters" → "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password
   - Update `MONGODB_URI` in your `.env` file

### 4. Start Development Server

```bash
# Start both frontend and backend
npm run dev
```

**Access the application:**
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## 🌐 Production Deployment

### Vercel Deployment

#### 1. Install Vercel CLI
```bash
npm i -g vercel
```

#### 2. Login to Vercel
```bash
vercel login
```

#### 3. Deploy Backend
```bash
# Deploy backend API
vercel --prod
```

**Set Environment Variables in Vercel Dashboard:**
- `MONGODB_URI`: Your MongoDB Atlas connection string
- `JWT_SECRET`: Secure JWT secret
- `NODE_ENV`: production

#### 4. Deploy Frontend
```bash
# Deploy frontend
cd client
vercel --prod
```

**Set Environment Variables for Frontend:**
- `REACT_APP_API_URL`: Your backend API URL (from step 3)

### Alternative: One-Click Deploy

#### Deploy to Vercel (Backend)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/servicehub)

#### Deploy to Vercel (Frontend)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/servicehub&root-directory=client)

## 🔧 Configuration Files

### vercel.json (Root)
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server/index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server/index.js"
    }
  ]
}
```

### client/vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "framework": "create-react-app"
}
```

## 🎯 Post-Deployment Setup

### 1. Create Admin User
After deployment, you need to create an admin user:

1. Register a regular account
2. Go to your MongoDB Atlas dashboard
3. Find the user in the `users` collection
4. Update the `role` field to `"admin"`

### 2. Test the Application
1. **Register** as a service seeker
2. **Register** as a service provider
3. **Approve** the provider (as admin)
4. **Test** the search and chat functionality

### 3. Domain Configuration (Optional)
- Connect your custom domain in Vercel dashboard
- Update CORS settings if needed
- Configure SSL certificates (automatic with Vercel)

## 🔍 Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **MongoDB Connection Issues**
   - Check connection string format
   - Verify network access settings
   - Ensure database user has correct permissions

3. **CORS Issues**
   - Update CORS settings in server/index.js
   - Check environment variables

4. **Environment Variables**
   - Verify all variables are set in Vercel dashboard
   - Check variable names match exactly
   - Restart deployment after adding variables

### Debug Commands

```bash
# Check Vercel deployment logs
vercel logs

# Check environment variables
vercel env ls

# Redeploy with debug info
vercel --debug
```

## 📊 Monitoring & Analytics

### Vercel Analytics
- Enable Vercel Analytics in dashboard
- Monitor performance and usage
- Track deployment metrics

### MongoDB Atlas Monitoring
- Monitor database performance
- Set up alerts for high usage
- Track query performance

## 🎉 Success!

Your ServiceHub platform is now live! 

**Next Steps:**
1. Test all functionality
2. Create your first admin user
3. Onboard service providers
4. Monitor platform usage
5. Scale as needed

**Platform Features:**
- ✅ User registration and authentication
- ✅ Service provider profiles
- ✅ Advanced search and filtering
- ✅ Real-time chat system
- ✅ Ratings and reviews
- ✅ Grievance reporting
- ✅ Admin dashboard
- ✅ Mobile-responsive design

**Access Your Platform:**
- Frontend: Your Vercel frontend URL
- Backend API: Your Vercel backend URL
- Admin Dashboard: Frontend URL + /admin

Happy coding! 🚀
