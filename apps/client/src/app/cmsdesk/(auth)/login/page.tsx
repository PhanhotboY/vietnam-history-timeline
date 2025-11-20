import { redirect } from 'next/navigation';
import { getAuthCookie } from '@/services/cookie.server';
// import { authenticator } from '@/services/auth.server';
// import { isExpired } from '@/utils';
import { LoginClient } from './LoginClient';

interface LoginPageProps {
  searchParams: Promise<{
    tab?: string;
    redirect?: string;
  }>;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const auth = await getAuthCookie();
  const redirectUrl = params.redirect || '/user/profile';

  // If the user is already authenticated
  if (auth) {
    // TODO: Implement token expiration check and refresh logic
    // const { user, tokens } = auth;

    // Check if the access token is expired
    // if (isExpired(tokens.accessToken)) {
    //   if (isExpired(tokens.refreshToken)) {
    //     // Both tokens expired, clear cookie and continue to login
    //     await deleteAuthCookie();
    //   } else {
    //     // Refresh token is valid, refresh access token
    //     try {
    //       const tokenRefresh = await authenticator.authenticate('refresh-token', auth);
    //       await setAuthCookie(tokenRefresh);
    //       redirect(redirectUrl);
    //     } catch (err) {
    //       await deleteAuthCookie();
    //     }
    //   }
    // } else {
    // User is authenticated and token is valid
    redirect(redirectUrl);
    // }
  }

  const defaultTab = params.tab || 'ungvien';

  return <LoginClient defaultTab={defaultTab} redirectUrl={redirectUrl} />;
}
