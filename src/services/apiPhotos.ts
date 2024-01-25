import SERVER from "./server";

export async function getPhotos(albumId: string) {
  const res = await fetch(`${SERVER}/photos/${albumId}`);
  const data = await res.json();

  return data;
}
