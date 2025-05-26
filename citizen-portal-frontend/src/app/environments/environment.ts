export const environment = {
    production: false,
    apiUrl: 'http://localhost:8080/api',
    auth: {
      clientId: 'citizen-portal',
      issuer: 'http://localhost:8080/api/auth',
      redirectUri: 'http://localhost:4200/callback',
      logoutRedirectUri: 'http://localhost:4200/login'
    },
    recaptcha: {
      siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI' // test key
    },
    fileUpload: {
      maxSize: 5, // MB
      allowedTypes: ['image/jpeg', 'image/png', 'application/pdf']
    }
  };