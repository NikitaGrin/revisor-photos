import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/apiUsers";

export function useUsers() {
  const {
    isPending,
    data: users,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
    retry: false,
  });

  return { isPending, error, users };
}
