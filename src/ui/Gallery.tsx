import { usePhotos } from "../features/catalog/usePhotos";
import styles from "./Gallery.module.css";
import Spinner from "./Spinner";
import GalleryItem from "./GalleryItem";
import { getFavorites } from "../features/favorites/favoritesSlice";

function Gallery({ albumId = "" }: { albumId: string }) {
  const { isPending, error, photos } = usePhotos(albumId);

  function handleClick(e: React.ChangeEvent<any>) {
    e.stopPropagation();
  }

  if (isPending) return <Spinner />;

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
