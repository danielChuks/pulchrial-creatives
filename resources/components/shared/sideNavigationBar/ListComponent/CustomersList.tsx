import styles from "./index.module.scss";

interface CustomersListProps {
  icon: string;
  title: string;
}

export default function CustomersList({ title, icon }: CustomersListProps) {
  return (
    <div className={styles["customer-container"]}>
      <div>{icon}</div>
      <div>{title}</div>
    </div>
  );
}
