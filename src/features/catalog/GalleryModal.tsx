import styles from "./GalleryModal.module.css";

function GalleryModal({
  url,
  title,
  setIsModalActive,
}: {
  url: string;
  title: string;
  setIsModalActive: Function;
}) {
  return (
    <div
      className={styles.modal}
      onClick={() => setIsModalActive((state: boolean) => !state)}
    >
      <div role="button" className={styles.closeModal}>
        X
      </div>
      <img
        alt={title}
        className={styles.image}
        src={url}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

export default GalleryModal;
