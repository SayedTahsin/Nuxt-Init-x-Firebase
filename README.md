# Nuxt-init x FirebaseAuth

A boilerplate for starting a Nuxt 3 project with essential configurations, including:

- Nuxt 3 with TypeScript
- TailwindCSS for styling
- Pinia for store management
- Firebase Google Authentication with session management
- Protected Routes Middleware
- ESLint & Prettier for code formatting and linting

## Getting Started

### 1. Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new Firebase project
3. Enable **Google Authentication** in Firebase Authentication settings
4. Get the Firebase **API credentials** from Project Settings

### 2. Environment Variables
Create a `.env` file in the root directory and add the following:

```ini
NUXT_PUBLIC_FIREBASE_API_KEY=
NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NUXT_PUBLIC_FIREBASE_PROJECT_ID=
NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NUXT_PUBLIC_FIREBASE_APP_ID=
```

### 3. Install dependencies and run 
```bash
npm install
npm run dev
npm run build // Build code for production
npm run preview // Locally preview production build
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


