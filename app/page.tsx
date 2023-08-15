import { DefaultButton } from '@/components/buttons/default';
import { Footer } from '@/components/navigation/footer';
import { NavigationBar } from '@/components/navigation/navigationBar';
import { GoodNotification, BadNotification, WarnNotification, PushPosition } from '@/components/notifications/push';

export default function Home() {
  return (
    <main>
      <NavigationBar currentPage="home"/>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>ew js</h1>
        <DefaultButton
          text="click me"
        />
        <GoodNotification
          message="success"
          position={PushPosition.BottomRight}
        />
        <BadNotification
          message="failure"
          position={PushPosition.BottomLeft}
        />
        <WarnNotification
          message="warning"
          position={PushPosition.Bottom}
        />
      </div>
      <Footer/>
    </main>
  );
}
