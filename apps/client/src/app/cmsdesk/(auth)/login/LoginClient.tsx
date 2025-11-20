'use client';

import { useRef, useState, useTransition } from 'react';
import { toast } from 'react-toastify';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { loginAction } from './actions';
import Link from 'next/link';
// import BookingForm from '@/components/website/BookingForm';

interface LoginClientProps {
  redirectUrl: string;
}

export function LoginClient({ redirectUrl }: LoginClientProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPending, startTransition] = useTransition();
  const [showPassword, setShowPassword] = useState(false);
  const toastIdRef = useRef<any>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fingerprint = await import('@fingerprintjs/fingerprintjs')
      .then((FingerprintJS) => {
        return FingerprintJS.load();
      })
      .then((fp) => {
        return fp.get();
      })
      .then((result) => {
        return result.visitorId;
      })
      .catch((error) => {
        console.error('Error getting fingerprint:', error);
        toast.error('Có lỗi xảy ra khi dangd nhập. Vui lòng thử lại.');
        throw error;
      });

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append('redirectUrl', redirectUrl);
    formData.append('fingerprint', fingerprint);

    startTransition(async () => {
      toastIdRef.current = toast.loading('Đang đăng nhập...', {
        autoClose: false,
      });

      const result = await loginAction(null, formData);

      if (toastIdRef.current) {
        if (result.success) {
          toast.update(toastIdRef.current, {
            render: 'Đăng nhập thành công!',
            type: 'success',
            autoClose: 3000,
            isLoading: false,
          });
        } else {
          toast.update(toastIdRef.current, {
            render: result.message || 'Đăng nhập thất bại',
            type: 'error',
            autoClose: 3000,
            isLoading: false,
          });
        }
        toastIdRef.current = null;
      }
    });
  };

  return (
    <div className="h-screen bg-gradient-to-br from-primary/50 to-background/50 flex flex-col items-center justify-center p-4 md:p-6 overflow-y-auto">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Đăng nhập</CardTitle>
          <CardDescription className="text-center">
            Đăng nhập để truy cập vào trang quản lý nhân sự.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-2">
              <Label htmlFor="username">Tên đăng nhập</Label>
              <Input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nhập tên đăng nhập hoặc email"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Mật khẩu</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Nhập mật khẩu"
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/80 hover:text-foreground/60"
                >
                  {showPassword ? <Eye /> : <EyeOff />}
                </button>
              </div>
            </div>

            <Button className="w-full" type="submit" disabled={isPending}>
              {isPending ? 'Đang đăng nhập...' : 'Đăng nhập'}
            </Button>
          </form>
        </CardContent>

        <CardFooter>
          <p className="text-sm">
            Không có tài khoản?{' '}
            <a
              href="#"
              className="text-blue-500 font-medium hover:text-blue-600 hover:underline transition-all"
            >
              Liên hệ admin
            </a>
          </p>
        </CardFooter>
      </Card>

      <div className="mt-6 text-center">
        <p className="text-foreground/80">&copy; Iconic Inc.</p>
        <div className="flex items-center justify-center mt-2 space-x-3 text-sm text-foreground/60">
          <Link href="#">Privacy Policy</Link>
          <span className="text-gray-400">•</span>
          <Link href="#">Terms of Service</Link>
          <span className="text-gray-400">•</span>
          <Link href="#">Help Center</Link>
        </div>
      </div>
    </div>
  );
}
