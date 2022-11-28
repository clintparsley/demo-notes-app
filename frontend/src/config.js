const config = {
    SENTRY_DSN: "https://dedbe8b57df34ba6b5da1954af68339f@o4504234612424704.ingest.sentry.io/4504234623827968",
    STRIPE_KEY: "pk_test_51M8GrlGaSz85luPhosqvNIBm9LWmRqpq6cbAHwlIM8pbGfHL5vgDfZRMwaQ9d40rPq3032yqNqciA250fEexwaPC00CUo9FSWA",
    MAX_ATTACHMENT_SIZE: 5000000,
    // Backend config
    s3: {
      REGION: process.env.REACT_APP_REGION,
      BUCKET: process.env.REACT_APP_BUCKET,
    },
    apiGateway: {
      REGION: process.env.REACT_APP_REGION,
      URL: process.env.REACT_APP_API_URL,
    },
    cognito: {
      REGION: process.env.REACT_APP_REGION,
      USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
      APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
      IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
    },
  };
  
  export default config;