import { Member } from "../types/member";

export async function listMembers(): Promise<Member[]> {
  const response = await fetch(
    `http://localhost:8080/member`,
    {
      method: "GET",
    },
  );

  if (!response.ok) throw new Error("failed to fetch (get) from api");

  return response.json();
}

export async function getMember(id: number): Promise<Member> {
  const response = await fetch(
    `http://localhost:8080/member/${id}`,
    {
      method: "GET",
    },
  );

  if (!response.ok) throw new Error("failed to fetch (get) from api");

  return response.json();
}

export async function postMember(member: Member): Promise<Response> {
  console.log(JSON.stringify(member))

  const response = await fetch(
    `http://localhost:8080/member`,
    {
      method: "POST",
      body: JSON.stringify(member)
    }
  );

  if (!response.ok) throw new Error("failed to fetch (post) to api");

  return response;
}
