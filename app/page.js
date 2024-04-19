'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem('Auth');
    if (auth) {
      const authObject = JSON.parse(auth);
      if (authObject.status) {
        router.push('/dashboard');
      } else {
        router.push('/login');
      }
    } else {
      router.push('/login');
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Ana sayfa içeriği */}
    </main>
  );
}
