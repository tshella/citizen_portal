export const environment = {
    production: true,
    apiUrl: 'https://api.citizenportal.com/api',
    auth: {
      tokenEndpoint: '/auth/signin',
      refreshTokenEndpoint: '/auth/refreshtoken',
      registerEndpoint: '/auth/signup'
    },
    features: {
      enableDebug: false,
      enableMockData: false
    },
    pagination: {
      defaultPageSize: 10,
      pageSizeOptions: [5, 10, 25, 50]
    },
    recaptcha: {
      siteKey: 'YOUR_PROD_RECAPTCHA_KEY'
    },
    fileUpload: {
      maxSizeMB: 10,
      allowedTypes: ['image/jpeg', 'image/png', 'application/pdf']
    }
  };