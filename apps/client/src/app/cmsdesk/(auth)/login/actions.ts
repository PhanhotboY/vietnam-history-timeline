'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
// import { authenticator, logout } from '@/services/auth.server';
import { setAuthCookie } from '@/services/cookie.server';

interface LoginResult {
  success: boolean;
  message?: string;
  redirectTo?: string;
}

export async function loginAction(
  prevState: LoginResult | null,
  formData: FormData,
): Promise<LoginResult> {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;
  const fingerprint = formData.get('fingerprint') as string;
  const redirectUrl = formData.get('redirectUrl') as string;

  try {
    // TODO: Implement authenticator
    // const auth = await authenticator.authenticate('user-pass', {
    //   username,
    //   password,
    //   fingerprint,
    // });

    // Mock authentication - replace with actual implementation
    const auth: any = {
      user: {
        usr_role: {
          slug: 'user', // or 'spa-owner'
        },
      },
      tokens: {
        accessToken: 'mock-token',
        refreshToken: 'mock-refresh-token',
      },
    };

    await setAuthCookie(auth);

    // If the user is a spa owner, redirect to the spa owner dashboard
    if (auth.user.usr_role.slug === 'spa-owner') {
      redirect('/owner');
    }

    redirect(redirectUrl || '/user/profile');
  } catch (err: any) {
    return {
      success: false,
      message: err.message || 'Đăng nhập thất bại',
    };
  }
}
