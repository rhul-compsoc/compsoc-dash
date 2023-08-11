import { NavigationBar } from '@/components/navigationBar';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavigationBar currentPage="home"></NavigationBar>
      <h1>ew js</h1>
    </main>
  )
}
