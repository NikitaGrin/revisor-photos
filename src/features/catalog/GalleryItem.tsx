import styles from "./GalleryItem.module.css";
import GalleryModal from "./GalleryModal";
import { useState } from "react";

function GalleryItem({ url, title }: { url: string; title: string }) {
  const [isModalActive, setIsModalActive] = useState(false);

  function handleClick() {
    setIsModalActive(true);
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
      <div onClick={handleClick} className={styles.galleryItem}>
        <img alt={title} src={url} />
        <span className={styles.itemTitle}>{title}</span>
      </div>
    </>
  );
}

export default GalleryItem;
