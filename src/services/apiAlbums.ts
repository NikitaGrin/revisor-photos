import SERVER from "./server";

export async function getAlbums(userId: string) {
  const res = await fetch(`${SERVER}/albums/${userId}`);
  const data = await res.json();

  return data;
}
