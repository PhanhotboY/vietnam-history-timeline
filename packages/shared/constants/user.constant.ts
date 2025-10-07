export const USER = {
  DOCUMENT_NAME: 'User',
  COLLECTION_NAME: 'users',
  PREFIX: 'usr_',
  STATUS: {
    ACTIVE: {
      label: 'Hoạt động',
      value: 'ACTIVE',
    },
    PENDING: {
      label: 'Đang chờ',
      value: 'PENDING',
    },
    DELETED: {
      label: 'Đã xóa',
      value: 'DELETED',
    },
  },
  SEX: {
    MALE: {
      label: 'Nam',
      value: 'MALE',
    },
    FEMALE: {
      label: 'Nữ',
      value: 'FEMALE',
    },
    OTHER: {
      label: 'Khác',
      value: 'OTHER',
    },
  },
} as const;
