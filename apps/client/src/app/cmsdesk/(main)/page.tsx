import { getAuthCookie } from '@/services/cookie.server';
import { redirect } from 'next/navigation';

export function generateMetadata() {
  return {
    title: 'Cài đặt trang',
  };
}

export default async function PageManager() {
  const auth = await getAuthCookie();

  if (!auth) {
    redirect('/cmsdesk/login');
  }

  // const pages = await getPages({ user: auth });
  const pages: any[] = []; // Uncomment above and remove this line when getPages is available

  return <div />;
}
