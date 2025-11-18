import { HistoricalEventTimeline } from '@/components/HistoricalEventTimeline';
import { HistoricalEventDetailResponseDto } from '@nsv-common/dto';

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-4xl text-center font-bold mb-8">Lịch sử Việt Nam</h1>

      <HistoricalEventTimeline events={events} />
    </main>
  );
}

const events: HistoricalEventDetailResponseDto[] = [
  {
    id: '1',
    fromYear: -2879,
    name: 'Vương quốc Văn Lang',
    content:
      'Theo truyền thuyết, vua Hùng đầu tiên lập ra nước Văn Lang, đánh dấu sự khởi đầu của lịch sử Việt Nam cổ đại. Các vua Hùng cai trị với 18 đời.',
    author: {
      firstName: 'Admin',
      lastName: 'User',
      id: 'admin-1',
      slug: 'admin-user',
    },
    categories: [
      {
        category: {
          name: 'Ancient Kingdom',
          slug: 'ancient-kingdom',
        },
      },
    ],
  },
  {
    id: '2',
    fromYear: -208,
    toYear: -179,
    name: 'Vương quốc Âu Lạc',
    content:
      'Thục Phán đánh bại vua Hùng cuối cùng, sáp nhập Văn Lang và Thục Phán, lập ra nước Âu Lạc với kinh đô tại Cổ Loa.',
    author: {
      firstName: 'Admin',
      lastName: 'User',
      id: 'admin-1',
      slug: 'admin-user',
    },
    categories: [
      {
        category: {
          name: 'Ancient Kingdom',
          slug: 'ancient-kingdom',
        },
      },
    ],
  },
  {
    id: '3',
    fromYear: 938,
    fromMonth: 10,
    name: 'Trận Bạch Đằng',
    content:
      'Ngô Quyền đánh bại quân Nam Hán trên sông Bạch Đằng bằng chiến thuật cọc ngầm, chấm dứt 1000 năm Bắc thuộc, mở đầu thời kỳ độc lập tự chủ.',
    author: {
      firstName: 'Admin',
      lastName: 'User',
      id: 'admin-1',
      slug: 'admin-user',
    },
    thumbnail: {
      publicUrl: 'https://picsum.photos/200/300?random=1',
    },
    categories: [
      {
        category: {
          name: 'Battle',
          slug: 'battle',
        },
      },
    ],
  },
  {
    id: '4',
    fromYear: 1010,
    toYear: 1225,
    name: 'Nhà Lý',
    content:
      'Lý Công Uẩn lên ngôi, dời đô về Thăng Long (Hà Nội). Triều đại Lý phát triển kinh tế, văn hóa, xây dựng chế độ quân chủ trung ương tập quyền.',
    thumbnail: {
      publicUrl: 'https://picsum.photos/200/300?random=2',
    },
    author: {
      firstName: 'Admin',
      lastName: 'User',
      id: 'admin-1',
      slug: 'admin-user',
    },
    categories: [
      {
        category: {
          name: 'Dynasty',
          slug: 'dynasty',
        },
      },
    ],
  },
  {
    id: '5',
    fromYear: 1225,
    toYear: 1400,
    name: 'Nhà Trần',
    content:
      'Trần Thủ Độ giúp Trần Cảnh lên ngôi. Nhà Trần ba lần đánh thắng quân Nguyên Mông, bảo vệ được độc lập dân tộc.',
    thumbnail: {
      publicUrl: 'https://picsum.photos/200/300?random=3',
    },
    author: {
      firstName: 'Admin',
      lastName: 'User',
      id: 'admin-1',
      slug: 'admin-user',
    },
    categories: [
      {
        category: {
          name: 'Dynasty',
          slug: 'dynasty',
        },
      },
    ],
  },
  {
    id: '6',
    fromYear: 1288,
    fromMonth: 4,
    name: 'Trận Bạch Đằng lần 2',
    content:
      'Trần Hưng Đạo chỉ huy quân dân Đại Việt đánh bại 300,000 quân Nguyên Mông tại sông Bạch Đằng, sử dụng chiến thuật cọc ngầm nổi tiếng.',
    thumbnail: {
      publicUrl: 'https://picsum.photos/200/300?random=4',
    },
    author: {
      firstName: 'Admin',
      lastName: 'User',
      id: 'admin-1',
      slug: 'admin-user',
    },
    categories: [
      {
        category: {
          name: 'Battle',
          slug: 'battle',
        },
      },
    ],
  },
  {
    id: '7',
    fromYear: 1428,
    toYear: 1788,
    name: 'Nhà Lê',
    content:
      'Lê Lợi khởi nghĩa Lam Sơn, đánh đuổi quân Minh, lập ra nhà Lê. Đây là triều đại phong kiến lâu dài nhất lịch sử Việt Nam.',
    thumbnail: {
      publicUrl: 'https://picsum.photos/200/300?random=5',
    },
    author: {
      firstName: 'Admin',
      lastName: 'User',
      id: 'admin-1',
      slug: 'admin-user',
    },
    categories: [
      {
        category: {
          name: 'Dynasty',
          slug: 'dynasty',
        },
      },
    ],
  },
  {
    id: '8',
    fromYear: 1802,
    toYear: 1945,
    name: 'Nhà Nguyễn',
    content:
      'Nguyễn Ánh thống nhất cả nước, lên ngôi hoàng đế, dời đô về Phú Xuân (Huế). Nhà Nguyễn là triều đại phong kiến cuối cùng của Việt Nam.',
    thumbnail: {
      publicUrl: 'https://picsum.photos/200/300?random=6',
    },
    author: {
      firstName: 'Admin',
      lastName: 'User',
      id: 'admin-1',
      slug: 'admin-user',
    },
    categories: [
      {
        category: {
          name: 'Dynasty',
          slug: 'dynasty',
        },
      },
    ],
  },
  {
    id: '9',
    fromYear: 1858,
    fromMonth: 9,
    fromDay: 1,
    toYear: 1945,
    name: 'Thời kỳ Pháp thuộc',
    author: {
      firstName: 'Admin',
      lastName: 'User',
      id: 'admin-1',
      slug: 'admin-user',
    },
    content:
      'Pháp bắt đầu xâm lược Việt Nam, dần dần biến nước ta thành thuộc địa. Thời kỳ này kéo dài gần 90 năm với nhiều cuộc khởi nghĩa chống thực dân.',
    categories: [
      {
        category: {
          name: 'Colonial Period',
          slug: 'colonial-period',
        },
      },
    ],
  },
  {
    id: '10',
    fromYear: 1930,
    fromMonth: 2,
    fromDay: 3,
    name: 'Thành lập Đảng Cộng sản Việt Nam',
    content:
      'Đảng Cộng sản Việt Nam được thành lập tại Hương Cảng (Hong Kong) do Nguyễn Ái Quốc (Hồ Chí Minh) chủ trì, mở ra kỷ nguyên mới cho cách mạng Việt Nam.',
    thumbnail: {
      publicUrl: 'https://picsum.photos/200/300?random=7',
    },
    author: {
      firstName: 'Admin',
      lastName: 'User',
      id: 'admin-1',
      slug: 'admin-user',
    },
    categories: [
      {
        category: {
          name: 'Political Event',
          slug: 'political-event',
        },
      },
    ],
  },
  {
    id: '11',
    fromYear: 1945,
    fromMonth: 8,
    fromDay: 19,
    name: 'Cách mạng tháng Tám',
    content:
      'Nhân dân Việt Nam nổi dậy giành chính quyền trên toàn quốc, lật đổ ách thống trị của thực dân Pháp và phát xít Nhật.',
    thumbnail: {
      publicUrl: 'https://picsum.photos/200/300?random=8',
    },
    author: {
      firstName: 'Admin',
      lastName: 'User',
      id: 'admin-1',
      slug: 'admin-user',
    },
    categories: [
      {
        category: {
          name: 'Revolution',
          slug: 'revolution',
        },
      },
    ],
  },
  {
    id: '12',
    fromYear: 1945,
    fromMonth: 9,
    fromDay: 2,
    name: 'Tuyên ngôn độc lập',
    content:
      'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn độc lập tại Quảng trường Ba Đình, Hà Nội, khai sinh ra nước Việt Nam Dân chủ Cộng hòa.',
    thumbnail: {
      publicUrl: 'https://picsum.photos/200/300?random=9',
    },
    author: {
      firstName: 'Admin',
      lastName: 'User',
      id: 'admin-1',
      slug: 'admin-user',
    },
    categories: [
      {
        category: {
          name: 'Independence',
          slug: 'independence',
        },
      },
    ],
  },
  {
    id: '13',
    fromYear: 1954,
    fromMonth: 5,
    fromDay: 7,
    name: 'Chiến thắng Điện Biên Phủ',
    content:
      'Quân và dân ta đại thắng tại Điện Biên Phủ, "lừng lẫy năm châu, chấn động địa cầu", buộc thực dân Pháp phải ký Hiệp định Genève.',
    thumbnail: {
      publicUrl: 'https://picsum.photos/200/300?random=10',
    },
    author: {
      firstName: 'Admin',
      lastName: 'User',
      id: 'admin-1',
      slug: 'admin-user',
    },
    categories: [
      {
        category: {
          name: 'Battle',
          slug: 'battle',
        },
      },
    ],
  },
  {
    id: '14',
    fromYear: 1975,
    fromMonth: 4,
    fromDay: 30,
    name: 'Giải phóng miền Nam',
    content:
      'Chiến dịch Hồ Chí Minh kết thúc thắng lợi, giải phóng hoàn toàn miền Nam, thống nhất đất nước.',
    thumbnail: {
      publicUrl: 'https://picsum.photos/200/300?random=11',
    },
    author: {
      firstName: 'Admin',
      lastName: 'User',
      id: 'admin-1',
      slug: 'admin-user',
    },
    categories: [
      {
        category: {
          name: 'War Victory',
          slug: 'war-victory',
        },
      },
    ],
  },
  {
    id: '15',
    fromYear: 1986,
    fromMonth: 12,
    name: 'Đổi mới',
    content:
      'Đại hội Đảng lần thứ VI quyết định đường lối đổi mới toàn diện đất nước, chuyển sang nền kinh tế thị trường định hướng xã hội chủ nghĩa.',
    thumbnail: {
      publicUrl: 'https://picsum.photos/200/300?random=12',
    },
    author: {
      firstName: 'Admin',
      lastName: 'User',
      id: 'admin-1',
      slug: 'admin-user',
    },
    categories: [
      {
        category: {
          name: 'Economic Reform',
          slug: 'economic-reform',
        },
      },
    ],
  },
];
