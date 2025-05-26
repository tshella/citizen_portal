export const environment = {
    production: true,
    apiUrl: 'https://api.citizenportal.com/api',
    auth: {
      clientId: 'citizen-portal',
      issuer: 'https://api.citizenportal.com/api/auth',
      redirectUri: 'https://portal.citizenportal.com/callback',
      logoutRedirectUri: 'https://portal.citizenportal.com/login'
    },
    recaptcha: {
      siteKey: 'PRODUCTION_RECAPTCHA_KEY'
    },
    fileUpload: {
      maxSize: 10, // MB
      allowedTypes: ['image/jpeg', 'image/png', 'application/pdf']
    }
  };