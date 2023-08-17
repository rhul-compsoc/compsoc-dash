import { Footer } from "@/components/navigation/footer";
import { SearchBar } from "@/components/navigation/searchBar";

export default function UserPage() {
  return (
    <main>
      <SearchBar currentPage="students"></SearchBar>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>users</h1>
      </div>
      <Footer/>
    </main>
  );
}

