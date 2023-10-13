import { Event } from "../types/event";

export async function listEvents(): Promise<Event[]> {
  const response = await fetch(
    `http://localhost:8080/api/v1/event`,
    {
      method: "GET",
    },
  );

  if (!response.ok) throw new Error("failed to fetch (get) from api");

  return response.json();
}

export async function getEvent(id: number): Promise<Event> {
  const response = await fetch(
    `http://localhost:8080/api/v1/event/${id}`,
    {
      method: "GET",
    },
  );

  if (!response.ok) throw new Error("failed to fetch (get) from api");

  return response.json();
}

export async function postEvent(event: Event): Promise<Response> {
  const response = await fetch(
    `http://localhost:8080/api/v1/event`,
    {
      method: "POST",
      body: JSON.stringify(event)
    }
  );

  if (!response.ok) throw new Error("failed to fetch (post) to api");

  return response.json();
}

export async function putEvent(event: Event): Promise<Response> {
  const response = await fetch(
    `http://localhost:8080/api/v1/event`,
    {
      method: "PUT",
      body: JSON.stringify(event)
    }
  );

  if (!response.ok) throw new Error("failed to fetch (put) to api");

  return response.json();
}

export async function patchEvent(event: Event): Promise<Response> {
  const response = await fetch(
    `http://localhost:8080/api/v1/event`,
    {
      method: "PATCH",
      body: JSON.stringify(event)
    }
  );

  if (!response.ok) throw new Error("failed to fetch (patch) to api");

  return response.json();
}

export async function deleteEvent(id: number): Promise<Response> {
  const response = await fetch(
    `http://localhost:8080/api/v1/event/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) throw new Error("failed to fetch (delete) to api");

  return response.json();
}