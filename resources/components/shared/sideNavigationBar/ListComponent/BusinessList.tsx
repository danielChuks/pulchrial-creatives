import styles from "./index.module.scss";

interface CustomersListProps {
  icon: string;
  title: string;
}

export default function BusinessList({ icon, title }: CustomersListProps) {
  return (
    <div className={styles["business-container"]}>
      <div>{icon}</div>
      <div>{title}</div>
    </div>
  );
}
