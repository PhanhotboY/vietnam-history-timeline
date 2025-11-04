export const USER_EVENT = {
  REGISTERED: 'user.registered',
} as const;

export const USER = {
  STATUS: {
    ACTIVE: 'ACTIVE',
    PENDING: 'PENDING',
    DELETED: 'DELETED',
  },
  SEX: {
    MALE: 'MALE',
    FEMALE: 'FEMALE',
    OTHER: 'OTHER',
  },
} as const;
