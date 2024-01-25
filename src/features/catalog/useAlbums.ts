import { useQuery } from "@tanstack/react-query";
import { getAlbums } from "../../services/apiAlbums";

export function useAlbums(userId: string) {
  const {
    isPending,
    data: albums,
    error,
  } = useQuery({
    queryKey: ["albums"],
    queryFn: () => getAlbums(userId),
    retry: false,
  });

  return { isPending, error, albums };
}
