import styles from "./GalleryItem.module.css";
import GalleryModal from "./GalleryModal";
import { useState } from "react";
import { HiStar, HiOutlineStar } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  deleteItem,
  getIsFavorite,
} from "../features/favorites/favoritesSlice";

function GalleryItem({
  url,
  title,
  id,
  albumId,
}: {
  url: string;
  title: string;
  id: string;
  albumId: string;
}) {
  const [isModalActive, setIsModalActive] = useState(false);
  const [isFavorite, setIsFavorite] = useState(useSelector(getIsFavorite(id)));
  const dispatch = useDispatch();

  function handleOpen() {
    setIsModalActive(true);
  }

  function handleFavorite(e: React.ChangeEvent<any>) {
    e.stopPropagation();

    if (!isFavorite) {
      dispatch(addItem({ albumId, id, title, url }));
    } else {
      dispatch(deleteItem(id));
    }

    setIsFavorite((state: any) => !state);
  }

  return (
    <>
      {isModalActive && (
        <GalleryModal
          title={title}
          setIsModalActive={setIsModalActive}
          url={url}
        />
      )}
      <div onClick={handleOpen} className={styles.galleryItem}>
        <img alt={title} src={url} />
        <div className={styles.favorite} onClick={handleFavorite}>
          {isFavorite ? (
            <HiStar fill={"orange"} />
          ) : (
            <HiOutlineStar color={"orange"} />
          )}
        </div>
        <span className={styles.itemTitle}>{title}</span>
      </div>
    </>
  );
}

export default GalleryItem;
