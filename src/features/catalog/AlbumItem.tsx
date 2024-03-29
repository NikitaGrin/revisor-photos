import { useState } from "react";

import styles from "./AlbumItem.module.css";
import ListItemControls from "./ListItemControls";
import Gallery from "../../ui/Gallery";

function AlbumItem({
  albumId,
  userId,
  title,
}: {
  albumId: string;
  userId: string;
  title: string;
}) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <>
      <ul
        className={styles.albumItem}
        onClick={(e) => {
          e.stopPropagation();
          setIsCollapsed((state) => !state);
        }}
      >
        <ListItemControls
          title={title}
          isCollapsed={isCollapsed}
          isNested={true}
        />

        {!isCollapsed && <Gallery albumId={albumId} />}
      </ul>
    </>
  );
}

export default AlbumItem;
