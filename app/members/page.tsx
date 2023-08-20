'use client'

import { DefaultButton } from "@/components/buttons/default";
import { CreateForm, EditForm } from "@/components/forms/memberForm";
import { Footer } from "@/components/navigation/footer";
import { SearchBar } from "@/components/navigation/searchBar";
import { Table } from "@/components/table/memberTable";
import { getMember, listMembers } from "@/lib/api/members";
import { Member } from "@/lib/types/member";
import { useEffect, useState } from "react";

export default function Page() {
  const [content, setContent] = useState<JSX.Element | null>(null);
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isCreateOpen, setIsCreateOpen] = useState<boolean>(false);
  const [currentMember, setCurrentMember] = useState<Member>({
    id: 0,
    student_id: "",
    student_email: "",
    first_name: "",
    last_name: "",
    active_member: false
  });

  useEffect(() => {
    const handleOpenEdit = async (id: number) => {
      setIsEditOpen(true);
      document.body.classList.add('overflow-hidden');
      setCurrentMember(await getMember(id))
      console.log(isEditOpen, id)
    };

    const handleCloseEdit = () => {
      setIsEditOpen(false);
      document.body.classList.remove('overflow-hidden');
      console.log(isEditOpen)
    };

    const handleOpenCreate = () => {
      setIsCreateOpen(true);
      document.body.classList.add('overflow-hidden');
      console.log(isCreateOpen)
    };

    const handleCloseCreate = () => {
      setIsCreateOpen(false);
      document.body.classList.remove('overflow-hidden');
      console.log(isCreateOpen)
    };

    const fetchData = async () => {
      try {
        const memberData = await listMembers();

        const pageContent = (
          <main>
            {isEditOpen && <EditForm member={currentMember} on_click={handleCloseEdit}/>}

            {isCreateOpen && <CreateForm member={currentMember} on_click={handleCloseCreate}/>}

            <SearchBar currentPage="members"></SearchBar>
            <div className="flex min-h-screen flex-col items-center justify-between p-24 inset-0">
            {(isEditOpen || isCreateOpen) && <div className="absolute inset-0 backdrop-blur-md z-10"></div>}
              <Table
                rows={memberData}
                on_click={handleOpenEdit}
              />

              <DefaultButton
                text="Create"
                on_click={handleOpenCreate}
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
  }, [isEditOpen, isCreateOpen, currentMember]);

  return content;
}
