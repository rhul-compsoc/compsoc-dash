import { SearchBar } from "@/components/searchBar";

export default function MemberPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchBar currentPage="members"></SearchBar>
      <h1>members</h1>
    </main>
  );
}
