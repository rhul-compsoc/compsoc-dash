import { Footer } from '@/components/footer';
import { NavigationBar } from '@/components/navigationBar';

export default function Home() {
  return (
    <main>
      <NavigationBar currentPage="students"/>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>students</h1>
      </div>
      <Footer/>
    </main>
  );
}
