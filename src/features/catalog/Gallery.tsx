import { usePhotos } from "./usePhotos";
import styles from "./Gallery.module.css";
import Spinner from "../../ui/Spinner";
import GalleryItem from "./GalleryItem";

function Gallery({ albumId }: { albumId: string }) {
  const { isPending, error, photos } = usePhotos(albumId);

  function handleClick(e: React.ChangeEvent<any>) {
    e.stopPropagation();
  }

  if (isPending) return <Spinner />;

  return (
    <div onClick={handleClick} className={styles.gallery}>
      {photos.map((photo: { url: string; title: string }) => (
        <GalleryItem {...photo} />
      ))}
    </div>
  );
}

export default Gallery;
