import { Footer } from "@/components/navigation/footer";
import { NavigationBar } from "@/components/navigation/navigationBar";

export default function Page() {
  return (
    <main>
      <NavigationBar currentPage="files"/>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>files</h1>
      </div>
      <Footer/>
    </main>
  );
}
