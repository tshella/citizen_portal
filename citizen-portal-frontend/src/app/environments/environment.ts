export const environment = {
    production: false,
    apiUrl: 'http://localhost:8080/api',
    auth: {
      tokenEndpoint: '/auth/signin',
      refreshTokenEndpoint: '/auth/refreshtoken',
      registerEndpoint: '/auth/signup'
    },
    features: {
      enableDebug: true,
      enableMockData: true
    },
    pagination: {
      defaultPageSize: 10,
      pageSizeOptions: [5, 10, 25, 50]
    },
    recaptcha: {
      siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI' // Test key
    },
    fileUpload: {
      maxSizeMB: 5,
      allowedTypes: ['image/jpeg', 'image/png', 'application/pdf']
    }
  };