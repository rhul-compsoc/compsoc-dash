import { Footer } from "@/components/navigation/footer";
import { SearchBar } from "@/components/navigation/searchBar";

export default function EventPage() {
  return (
    <main>
      <SearchBar currentPage="events"></SearchBar>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>events</h1>
      </div>
      <Footer/>
    </main>
  );
}
