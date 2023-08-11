import { SearchBar } from "@/components/searchBar";

export default function UserPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchBar currentPage="users"></SearchBar>
      <h1>users</h1>
    </main>
  );
}

