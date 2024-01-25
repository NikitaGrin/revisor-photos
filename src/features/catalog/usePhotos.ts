import { useQuery } from "@tanstack/react-query";
import { getPhotos } from "../../services/apiPhotos";

export function usePhotos(albumId: string) {
  const {
    isPending,
    data: photos,
    error,
  } = useQuery({
    queryKey: ["photos", albumId],
    queryFn: () => getPhotos(albumId),
    retry: false,
  });

  return { isPending, error, photos };
}
