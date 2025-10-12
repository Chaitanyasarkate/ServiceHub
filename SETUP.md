# ServiceHub Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher) - [Download here](https://nodejs.org/)
- MongoDB (local or Atlas) - [MongoDB Atlas](https://www.mongodb.com/atlas) (recommended)

### 1. Install Dependencies

```bash
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..
```

### 2. Environment Configuration

Create a `.env` file in the root directory:

```bash
# Copy the example file
cp env.example .env
```

Edit `.env` with your configuration:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/servicehub
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/servicehub

# JWT Secret (generate a secure random string)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Server Configuration
PORT=5000
NODE_ENV=development
```

### 3. Start Development Server

```bash
# Start both frontend and backend
npm run dev
```

This will start:
- Backend server on http://localhost:5000
- Frontend React app on http://localhost:3000

### 4. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Documentation**: http://localhost:5000/api

## 🎯 Production Deployment

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
cd client
vercel --prod
```

#### 4. Environment Variables for Production

Set these in your Vercel dashboard:

**Backend Environment Variables:**
- `MONGODB_URI`: Your MongoDB Atlas connection string
- `JWT_SECRET`: Secure JWT secret
- `NODE_ENV`: production

**Frontend Environment Variables:**
- `REACT_APP_API_URL`: Your backend API URL

### MongoDB Atlas Setup

1. **Create Account**: Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. **Create Cluster**: Choose the free tier
3. **Get Connection String**: 
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password
4. **Whitelist IP**: Add `0.0.0.0/0` for all IPs (or your Vercel IPs)

### Firebase Setup (Optional - for real-time chat)

1. **Create Project**: Go to [Firebase Console](https://console.firebase.google.com/)
2. **Enable Realtime Database**
3. **Get Service Account Key**:
   - Go to Project Settings > Service Accounts
   - Generate new private key
   - Download the JSON file
4. **Add to Environment Variables**:
   - `FIREBASE_PROJECT_ID`: Your project ID
   - `FIREBASE_PRIVATE_KEY`: Private key from JSON
   - `FIREBASE_CLIENT_EMAIL`: Client email from JSON

## 🔧 Troubleshooting

### Common Issues

1. **Port already in use**:
   ```bash
   # Kill process on port 5000
   npx kill-port 5000
   ```

2. **MongoDB connection failed**:
   - Check your connection string
   - Ensure MongoDB is running
   - Check firewall settings

3. **Build errors**:
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

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

## 📱 User Roles

### Default Admin Account
After first deployment, create an admin user:
1. Register a new account
2. Manually update the user role to 'admin' in MongoDB
3. Or use the admin creation script

### Test Accounts
- **Seeker**: Regular user looking for services
- **Provider**: Service provider (needs admin approval)
- **Admin**: Platform administrator

## 🎉 Success!

Your ServiceHub platform is now ready! You can:

1. **Register** as a service seeker or provider
2. **Browse** available services
3. **Chat** with providers
4. **Manage** the platform (as admin)

## 📞 Support

If you encounter any issues:
1. Check the console for error messages
2. Verify all environment variables are set
3. Ensure MongoDB is accessible
4. Check Vercel deployment logs

Happy coding! 🚀
