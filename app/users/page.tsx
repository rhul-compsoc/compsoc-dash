import { SearchBar } from "@/components/searchBar";
import { Table } from "@/components/table";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchBar currentPage="users"></SearchBar>
      <h1>users</h1>
      <Table></Table>
    </main>
  );
}

