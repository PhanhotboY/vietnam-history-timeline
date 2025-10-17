export * from './app.constant';
export * from './otp.constant';
export * from './category.constant';
export * from './image.constant';
export * from './branch.constant';
export * from './role.constant';

export const KEYTOKEN = {
  DOCUMENT_NAME: 'KeyToken',
  COLLECTION_NAME: 'key_tokens',
};

export const APIKEY = {
  DOCUMENT_NAME: 'ApiKey',
  COLLECTION_NAME: 'apikeys',
};

export const HEADER = {
  API_KEY: 'x-api-key',
  CLIENT_ID: 'x-client-id',
  AUTHORIZATION: 'authorization',
  REFRESH_TOKEN: 'x-refresh-token',
};
