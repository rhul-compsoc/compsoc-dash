'use client'

import { CreateForm } from "@/components/forms/eventForm";

export default function Page() {
  const func = () => {
    console.log("clikc")
  }

  return (
    <div>
      <CreateForm
        on_click={func}
      />
    </div>
  );
}
