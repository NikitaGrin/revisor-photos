import { usePhotos } from "./usePhotos";
import styles from "./GalleryItem.module.css";
import Spinner from "../../ui/Spinner";

function GalleryItem({ albumId }: { albumId: string }) {
  const { isPending, error, photos } = usePhotos(albumId);

  if (isPending) return <Spinner />;

  return (
    <div className={styles.gallery}>
      {photos.map((photo: { url: string; title: string }) => (
        <div>
          <img
            alt={photo.title}
            src={photo.url}
            className={styles.galleryItem}
          />
        </div>
      ))}
    </div>
  );
}

export default GalleryItem;
