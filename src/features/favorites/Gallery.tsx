import { useSelector } from "react-redux";
import { getFavorites } from "./favoritesSlice";
import styles from "./Gallery.module.css";
import GalleryItem from "../../ui/GalleryItem";

function Gallery() {
  const photos = useSelector(getFavorites);
  console.log(photos);

  function handleClick(e: React.ChangeEvent<any>) {
    e.stopPropagation();
  }

  // if (isPending) return <Spinner />;

  return (
    <div onClick={handleClick} className={styles.gallery}>
      {photos.map(
        (photo: {
          id: string;
          albumId: string;
          url: string;
          title: string;
        }) => (
          <GalleryItem key={photo.url} {...photo} />
        )
      )}
    </div>
  );
}

export default Gallery;
