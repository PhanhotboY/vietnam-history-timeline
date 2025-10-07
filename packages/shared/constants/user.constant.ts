export const USER = {
  DOCUMENT_NAME: 'User',
  COLLECTION_NAME: 'users',
  PREFIX: 'usr_',
  STATUS: {
    ACTIVE: {
      label: 'Hoạt động',
      value: 'active',
    },
    PENDING: {
      label: 'Đang chờ',
      value: 'pending',
    },
    DELETED: {
      label: 'Đã xóa',
      value: 'deleted',
    },
  },
  SEX: {
    MALE: {
      label: 'Nam',
      value: 'male',
    },
    FEMALE: {
      label: 'Nữ',
      value: 'female',
    },
    OTHER: {
      label: 'Khác',
      value: 'other',
    },
  },
} as const;
