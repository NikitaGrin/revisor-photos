import styles from "./ListItemControls.module.css";

function ListItemControls({
  title,
  isCollapsed,
  isNested = false,
}: {
  title: string;
  isCollapsed: boolean;
  isNested?: boolean;
}) {
  return (
    <div
      className={`${styles.controls} ${!isCollapsed && styles.controlsActive}`}
    >
      <button
        className={`${styles.btnCollapse} ${
          isNested && styles.btnCollapseSmall
        }`}
      >
        {isCollapsed ? "+" : "-"}
      </button>
      {isNested ? <h3>{title}</h3> : <h2>{title}</h2>}
    </div>
  );
}

export default ListItemControls;
