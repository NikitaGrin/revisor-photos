import SERVER from "./server";

export async function getUsers() {
  const res = await fetch(`${SERVER}/users`);
  const data = await res.json();

  return data;
}
