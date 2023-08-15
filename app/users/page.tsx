'use client'

import { Footer } from "@/components/footer";
import { SearchBar } from "@/components/searchBar";
import { listUsers } from "@/lib/api/users";
import { Table } from "./table";
import { useEffect, useState } from "react";

export default function Page() {
  const [content, setContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await listUsers();

        const pageContent = (
          <main>
            <SearchBar currentPage="users"></SearchBar>\
            <div className="flex min-h-screen flex-col items-center justify-between p-24">
              <Table
                rows={userData}
              />
            </div>
            <Footer/>
          </main>
        );

        setContent(pageContent);
      } catch (error) {
        console.error('Error fetching users:', error)

        setContent(<p>Error fetching users</p>);
      }
    };

    fetchData();
  }, []);

  return content;
}

