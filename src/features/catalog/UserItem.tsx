import { useState } from "react";

import styles from "./UserItem.module.css";
import { useAlbums } from "./useAlbums";
import AlbumItem from "./AlbumItem";
import ListItemControls from "./ListItemControls";
import Spinner from "../../ui/Spinner";

function UserItem({ name, id }: { name: string; id: string }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { isPending, error, albums } = useAlbums(id);

  if (isPending) return <Spinner />;

  return (
    <ul
      onClick={() => setIsCollapsed((state) => !state)}
      className={styles.listItem}
    >
      <ListItemControls title={name} isCollapsed={isCollapsed} />
      {!isCollapsed &&
        albums.map(
          (album: { albumId: string; userId: string; title: string }) => (
            <AlbumItem
              albumId={album.albumId}
              userId={album.userId}
              title={album.title}
            />
          )
        )}
    </ul>
  );
}

export default UserItem;
