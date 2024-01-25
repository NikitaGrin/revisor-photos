import Spinner from "../../ui/Spinner";
import UserItem from "./UserItem";
import { useUsers } from "./useUsers";
import styles from "./List.module.css";

function List() {
  const { isPending, error, users } = useUsers();

  if (isPending) return <Spinner />;
  console.log(users);

  return (
    <ul className={styles.list}>
      {users.map((user: { name: string; id: string }) => (
        <UserItem key={user.id} name={user.name} id={user.id} />
      ))}
    </ul>
  );
}

export default List;
