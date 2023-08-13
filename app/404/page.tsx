import { Footer } from "@/components/footer";
import { NavigationBar } from "@/components/navigationBar"

export default function Custom404() {
  return (
    <main>
      <NavigationBar
        currentPage="404"
      />
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>404. how have you done that then?</h1>
      </div>
      <Footer/>
    </main>
  );
}
