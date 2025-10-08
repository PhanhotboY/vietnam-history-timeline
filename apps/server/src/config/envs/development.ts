export const config = {
  // db: {
  //   type: process.env.DB_TYPE || 'mysql',
  //   synchronize: false,
  //   logging: true,
  //   host: process.env.DB_HOST || '127.0.0.1',
  //   port: process.env.DB_PORT || 3306,
  //   username: process.env.DB_USER || 'username',
  //   password: process.env.DB_PASSWORD || 'password',
  //   database: process.env.DB_NAME || 'dbname',
  //   extra: {
  //     connectionLimit: 10,
  //   },
  //   autoLoadEntities: true,
  // },
  mail: {
    host: process.env.SMTP_HOST || 'smtp.example.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER || 'user@example.com',
      pass: process.env.SMTP_PASSWORD || 'password',
    },
  },
  serverUrl: process.env.SERVER_URL || 'http://localhost:3000',
  jwtSecret: process.env.JWT_SECRET,
  clientUrl: process.env.CLIENT_URL || 'http://localhost:4200',
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
  },
};
