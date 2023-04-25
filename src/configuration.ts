import { LayoutStyle } from '~/core/layout-style';
import { GoogleAuthProvider } from 'firebase/auth';

const configuration = {
  site: {
    name: 'Texas Eclipse Glasses',
    description: 'Order your ISO certified eclipse glasses today for the 2023 and 2024 solar eclipse | Made in America.  Witness the event of the century from the great State of Texas.',
    themeColor: '#ffffff',
    themeColorDark: '#0a0a0a',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL as string,
    siteName: 'Texas Eclipse Glasses',
    twitterHandle: '',
    githubHandle: '',
    language: 'en',
    convertKitFormId: '',
    locale: process.env.DEFAULT_LOCALE,
  },
  firebase: {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  },
  auth: {
    // Enable MFA. You must upgrade to GCP Identity Platform to use it.
    // see: https://cloud.google.com/identity-platform/docs/product-comparison
    enableMultiFactorAuth: false,
    // When enabled, users will be required to verify their email address
    // before being able to access the app
    requireEmailVerification:
      process.env.NEXT_PUBLIC_REQUIRE_EMAIL_VERIFICATION === 'true',
    // NB: Enable the providers below in the Firebase Console
    // in your production project
    providers: {
      emailPassword: true,
      phoneNumber: false,
      emailLink: false,
      oAuth: [GoogleAuthProvider],
    },
  },
  environment: process.env.NEXT_PUBLIC_VERCEL_ENV ?? 'development',
  emulatorHost: process.env.NEXT_PUBLIC_EMULATOR_HOST,
  emulator: process.env.NEXT_PUBLIC_EMULATOR === 'true',
  production: process.env.NODE_ENV === 'production',
  enableThemeSwitcher: true,
  paths: {
    signIn: '/auth/sign-in',
    signUp: '/auth/sign-up',
    emailLinkSignIn: '/auth/link',
    onboarding: `/onboarding`,
    appHome: '/dashboard',
    settings: {
      profile: '/settings/profile',
      authentication: '/settings/profile/authentication',
      email: '/settings/profile/email',
      password: '/settings/profile/password',
    },
    api: {
      checkout: `/api/stripe/checkout`,
      billingPortal: `/api/stripe/portal`,
    },
    searchIndex: `/public/search-index`,
    paymentLinkSingle: 'https://buy.stripe.com/9AQdTp4lI90U5Uc000',
    paymentLinkFivePack: 'https://buy.stripe.com/bIYcPlbOab922I06op'
  },
  navigation: {
    style: LayoutStyle.Sidebar,
  },
  appCheckSiteKey: process.env.NEXT_PUBLIC_APPCHECK_KEY,
  email: {
    host: '',
    port: 587,
    user: '',
    password: '',
    senderAddress: 'MakerKit Team <info@makerkit.dev>',
  },
  emailEtherealTestAccount: {
    email: process.env.ETHEREAL_EMAIL,
    password: process.env.ETHEREAL_PASSWORD,
  },
  sentry: {
    dsn: process.env.SENTRY_DSN,
  },
  stripe: {
    products: [
      {
        name: '1 pair',
        description: 'Single pair of our eclipse glasses',
        badge: ``,
        features: [
          'Basic Reporting',
          'Up to 20 users',
          '1GB for each user',
          'Chat Support',
        ],
        plans: [
          {
            name: 'single',
            price: '$4.99',
            stripePriceId: 'basic-plan-mth',
            trialPeriodDays: 0,
          }
        ],
      },
      {
        name: '5-pack',
        badge: `Most Popular`,
        recommended: true,
        description: 'Perfect for sharing with family & friends',
        features: [
          'Advanced Reporting',
          'Up to 50 users',
          '5GB for each user',
          'Chat and Phone Support',
        ],
        plans: [
          {
            name: 'fivePack',
            price: '$15.00',
            stripePriceId: 'pro-plan-mth',
            trialPeriodDays: 0,
          }
        ],
      },
      {
        name: 'Bulk orders',
        description: 'Are you a store looking to stock eclipse glasses?',
        badge: ``,
        features: [
          'Advanced Reporting',
          'Unlimited users',
          '50GB for each user',
          'Account Manager',
        ],
        plans: [
          {
            name: '',
            price: 'Contact us',
            stripePriceId: '',
            trialPeriodDays: 0,
            label: `Contact us`,
            href: `/contact`,
          },
        ],
      },
    ],
  },
};

export default configuration;
