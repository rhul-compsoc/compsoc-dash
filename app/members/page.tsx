'use client'

import { Footer } from "@/components/footer";
import { SearchBar } from "@/components/searchBar";
import { listMembers } from "@/lib/api/members";
import { Table } from "./table";
import { useEffect, useState } from "react";

export default function Page() {
  const [content, setContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const memberData = await listMembers();

        const pageContent = (
          <main>
            <SearchBar currentPage="members"></SearchBar>\
            <div className="flex min-h-screen flex-col items-center justify-between p-24">
              <Table
                rows={memberData}
              />
            </div>
            <Footer/>
          </main>
        );

        setContent(pageContent);
      } catch (error) {
        console.error('Error fetching members:', error)

        setContent(<p>Error fetching members</p>);
      }
    };

    fetchData();
  }, []);

  return content;
}
