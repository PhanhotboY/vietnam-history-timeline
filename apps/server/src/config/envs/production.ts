export const config = {
  // db: {
  //   type: process.env.DB_TYPE || 'mysql',
  //   synchronize: false,
  //   logging: false,
  //   replication: {
  //     master: {
  //       host: process.env.DB_HOST || 'masterHost',
  //       port: process.env.DB_PORT || 3306,
  //       username: process.env.DB_USER || 'username',
  //       password: process.env.DB_PASSWORD || 'password',
  //       database: process.env.DB_NAME || 'dbname',
  //     },
  //     slaves: [
  //       {
  //         // fix if necessary
  //         host: 'slaveHost',
  //         port: 3306,
  //         username: 'username',
  //         password: process.env.DB_PASSWORD || 'password',
  //         database: 'dbname',
  //       },
  //     ],
  //   },
  //   extra: {
  //     connectionLimit: 30,
  //   },
  //   autoLoadEntities: true,
  // },
  mail: {
    host: process.env.SMTP_HOST || 'smtp.example.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: true,
    auth: {
      user: process.env.SMTP_USER || 'user@example.com',
      pass: process.env.SMTP_PASSWORD || 'password',
    },
  },
  serverUrl: process.env.SERVER_URL || 'https://yourdomain.com',
  jwtSecret: process.env.JWT_SECRET,
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
};
