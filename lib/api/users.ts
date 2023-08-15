import { User } from "../types/user";

export async function listUsers(): Promise<User[]> {
  const response = await fetch(
    `http://localhost:8080/person`,
    {
      method: "GET",
    },
  );

  if (!response.ok) throw new Error("failed to fetch (get) from api");

  return response.json();
}

export async function getUser(id: number): Promise<User> {
  const response = await fetch(
    `http://localhost:8080/person/${id}`,
    {
      method: "GET",
    },
  );

  if (!response.ok) throw new Error("failed to fetch (get) from api");

  return response.json();
}
