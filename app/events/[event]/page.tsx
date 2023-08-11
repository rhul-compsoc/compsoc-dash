import { SearchBar } from "@/components/searchBar";

export default function EventPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchBar currentPage="events"></SearchBar>
      <h1>events</h1>
    </main>
  );
}
