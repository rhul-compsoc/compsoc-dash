import { Footer } from "@/components/footer";
import { SearchBar } from "@/components/searchBar";

export default function Page() {
  return (
    <main>
      <SearchBar currentPage="members"></SearchBar>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>members</h1>
      </div>
      <Footer/>
    </main>
  );
}
