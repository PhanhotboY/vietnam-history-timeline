import { cookies } from 'next/headers';
import { components } from '@nsv-interfaces/auth-service';

const COOKIE_NAME = '_auth';
const MAX_AGE = 7 * 60 * 24 * 30; // 7 days in seconds

const getCookieOptions = (maxAge: number = MAX_AGE) => ({
  sameSite: 'lax' as const, // this helps with CSRF
  path: '/', // remember to add this so the cookie will work in all routes
  httpOnly: true, // for security reasons, make this cookie http only
  secure: process.env.NODE_ENV === 'production', // enable this in prod only
  maxAge,
});

export const deleteAuthCookie = async () => {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
};

export const setAuthCookie = async (
  data: components['schemas']['JwtPayloadDto'],
) => {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, JSON.stringify(data), getCookieOptions());
};

export const getAuthCookie = async (): Promise<
  components['schemas']['JwtPayloadDto'] | null
> => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(COOKIE_NAME);

  if (!cookie?.value) return null;

  try {
    return JSON.parse(cookie.value) as components['schemas']['JwtPayloadDto'];
  } catch {
    return null;
  }
};
