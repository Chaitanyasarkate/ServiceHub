# ServiceHub - Web Platform for Hiring Personal Service Providers

ServiceHub is a comprehensive web platform designed to bridge the gap between users who require personal services such as tutors, cooks, yoga instructors, drivers, etc., and verified service providers.


## Features

### For Service Seekers
- **Easy Discovery**: Search and filter service providers by service type, skills, rating, and location
- **Verified Providers**: All providers are background checked and verified by admin team
- **Ratings & Reviews**: Read real reviews and ratings from other users
- **Real-time Chat**: Communicate directly with providers through secure chat system
- **Grievance System**: Report issues and get them resolved quickly
- **Interactive UI**: Modern, responsive design with smooth transitions and modals
- **Profile Images**: View provider and seeker profiles with images
- **Back to Top Button**: Quickly navigate to the top of any page
- **About Section**: Learn about ServiceHub on every main page
- **Accessibility**: ARIA labels, color contrast, and keyboard navigation

### For Service Providers
- **Profile Management**: Create detailed profiles with skills, experience, and portfolio
- **Admin Approval**: All profiles are reviewed and approved by admin team
- **Client Communication**: Chat with potential clients in real-time
- **Review System**: Build reputation through client reviews and ratings
- **Featured Providers**: Highlighted section for top-rated providers
- **Profile Images**: Showcase your profile with images

### For Administrators
- **Provider Management**: Approve or reject provider applications
- **Grievance Resolution**: Monitor and resolve user complaints
- **Analytics Dashboard**: Track platform usage and engagement metrics
- **User Management**: Manage user accounts and verification status

### General Features
- **Branding**: Custom favicon and page title
- **Code Quality**: Clean, commented, and organized codebase
- **Quick Start Scripts**: Batch files for easy setup and running

## Technology Stack

- **Frontend**: React 18 with TypeScript, TailwindCSS
- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Real-time Chat**: Firebase Realtime Database
- **Authentication**: JWT with bcrypt password hashing
- **Deployment**: Vercel (frontend + serverless functions)


## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Quick Start (Windows)

1. **Clone the repository**
   ```powershell
   git clone <https://github.com/Chaitanyasarkate/servicehub>
   cd ServiceHub
   ```

2. **Install dependencies**
   ```powershell
   .\fix-and-install.bat
   ```

3. **Set up environment variables**
   ```powershell
   copy env.example environment.env
   ```
   Edit `environment.env` with your configuration:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: A secure secret for JWT tokens
   - `PORT`: Server port (default: 5000)

4. **Start the application**
   ```powershell
   .\start-both.bat
   ```
   This will start both the backend server (port 5000) and React development server (port 3000).

### Manual Setup

If you prefer manual setup, follow these steps:
1. Install server dependencies:
   ```powershell
   npm install
   ```
2. Install client dependencies:
   ```powershell
   cd client
   npm install
   cd ..
   ```
3. Set up environment variables as above.
4. Start servers:
   ```powershell
   npm run dev
   ```

### Database Setup

The application uses MongoDB with the following main collections:
- `users`: User accounts and authentication
- `providers`: Service provider profiles
- `chats`: Chat conversations and messages
- `grievances`: User complaints and admin responses

### User Roles

1. **Seeker**: Users looking for services
2. **Provider**: Users offering services
3. **Admin**: Platform administrators

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Providers
- `GET /api/providers` - Get all approved providers
- `GET /api/providers/:id` - Get provider by ID
- `POST /api/providers` - Create provider profile
- `PUT /api/providers/profile/me` - Update provider profile
- `POST /api/providers/:id/review` - Add review and rating

### Chat
- `POST /api/chat/start` - Start or get existing chat
- `GET /api/chat/my-chats` - Get user's chats
- `GET /api/chat/:chatId/messages` - Get chat messages
- `POST /api/chat/:chatId/messages` - Send message

### Grievances
- `POST /api/grievances` - Create grievance
- `GET /api/grievances/my-grievances` - Get user's grievances
- `GET /api/grievances/:id` - Get grievance by ID
- `PUT /api/grievances/:id` - Update grievance

### Admin
- `GET /api/admin/dashboard` - Get dashboard statistics
- `GET /api/admin/users` - Get all users
- `PUT /api/admin/users/:id/verify` - Update user verification
- `GET /api/admin/providers` - Get all providers
- `PUT /api/admin/providers/:id/approve` - Approve/reject provider

## Deployment

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy backend**
   ```bash
   vercel --prod
   ```

3. **Deploy frontend**
   ```bash
   cd client
   vercel --prod
   ```

### Environment Variables for Production

Set these in your Vercel dashboard:
- `MONGODB_URI`: Your MongoDB Atlas connection string
- `JWT_SECRET`: Secure JWT secret
- `NODE_ENV`: production


## Project Structure

```
ServiceHub/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   └── App.tsx
│   └── package.json
├── server/                 # Node.js backend
│   └── index.js
├── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.


## Screenshots

### Home Page
![Home Page](client/public/screenshots/home.png)

### Service Providers
![Providers Page](client/public/screenshots/providers.png)

### Service Seekers
![Seekers Page](client/public/screenshots/seekers.png)

## Support

For support, email support@servicehub.com or create an issue in the repository.
