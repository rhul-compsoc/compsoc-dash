import { Footer } from "@/components/navigation/footer";
import { SearchBar } from "@/components/navigation/searchBar";

export default function MemberPage() {
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
