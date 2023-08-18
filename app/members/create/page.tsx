'use client'

import { Member } from "@/lib/types/member";
import { CreateForm, EditForm } from "@/components/forms/memberForm";

export default function Page() {
  const member: Member = {
    id: 1,
    student_id: "0123",
    student_email: "abc@email.com",
    first_name: "dav",
    last_name: "id",
    active_member: false
  }

  return (
    <div>
      {/* <CreateForm/> */}

      <EditForm
        member={member}
      />
    </div>
  );
}
