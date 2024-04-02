//NodeJS.ProcessEnv

declare namespace NodeJS {
  interface ProcessEnv {
    DB_HOST: string;
    DB_PORT: string;
    DB_USER: string;
    DB_PASS: string;
    DB_NAME: string;
    DB_DIALECT: string;
    PORT: string;
    //-----jwt-------///
    HASH_SALT: string;
    JWT_SECRET: string;
    //-----mail-------///
    MAIL_HOST: string;
    l;
    MAIL_USER: string;
    MAIL_PASS: string;
    FROM: string;
    //-----claudinary-------///
    CLOUD_NAME: string;
    API_KEY_CLOUD: string;
    API_SECRET: string;
    //-----stripe-------///
    STRIPE_SECRET_KEY: string;
    STRIPE_PUBLIC_KEY: string;
  }
}
