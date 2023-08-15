import { Event } from "../types/event";

export async function listEvents(): Promise<Event[]> {
  const response = await fetch(
    `http://localhost:8080/event`,
    {
      method: "GET",
    },
  );

  if (!response.ok) throw new Error("failed to fetch (get) from api");

  return response.json();
}

export async function getEvent(id: number): Promise<Event> {
  const response = await fetch(
    `http://localhost:8080/event/${id}`,
    {
      method: "GET",
    },
  );

  if (!response.ok) throw new Error("failed to fetch (get) from api");

  return response.json();
}
