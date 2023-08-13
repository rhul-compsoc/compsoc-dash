import { Footer } from "@/components/footer";
import { SearchBar } from "@/components/searchBar";
import { Table } from "@/components/table";

export default function Page() {
  return (
    <main>
      <SearchBar currentPage="users"></SearchBar>\
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Table
          rows={[
            {id: "126575", name: "davide"},
            {id: "945612", name: "oliver"},
            {id: "379801", name: "bobby"},
            {id: "901237", name: "natan"}
          ]}
        />
      </div>
      <Footer/>
    </main>
  );
}

