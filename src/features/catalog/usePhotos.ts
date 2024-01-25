import { useQuery } from "@tanstack/react-query";
import { getPhotos } from "../../services/apiPhotos";

export function usePhotos(userId: string) {
  const {
    isPending,
    data: photos,
    error,
  } = useQuery({
    queryKey: ["photos"],
    queryFn: () => getPhotos(userId),
    retry: false,
  });

  return { isPending, error, photos };
}
