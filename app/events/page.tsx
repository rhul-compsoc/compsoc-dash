'use client'

import { Footer } from "@/components/navigation/footer";
import { SearchBar } from "@/components/navigation/searchBar";
import { Table } from "@/components/table/eventTable";
import { listEvents } from "@/lib/api/events";
import { useEffect, useState } from "react";

export default function Page() {
  const [content, setContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventData = await listEvents();

        const pageContent = (
          <main>
            <SearchBar currentPage="events"></SearchBar>\
            <div className="flex min-h-screen flex-col items-center justify-between p-24">
              <Table
                rows={eventData}
              />
            </div>
            <Footer/>
          </main>
        );

        setContent(pageContent);
      } catch (error) {
        console.error('Error fetching events:', error)

        setContent(<p>Error fetching events</p>);
      }
    };

    fetchData();
  }, []);

  return content;
}
