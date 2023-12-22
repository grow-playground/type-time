'use client';

import { useRouter } from 'next/navigation';
import Button from './button';

export default function BackButton() {
  const router = useRouter();

  return <Button onClick={() => router.back()}>뒤로가기</Button>;
}