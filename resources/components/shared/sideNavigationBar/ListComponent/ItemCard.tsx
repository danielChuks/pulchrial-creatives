import { ReactNode } from "react";
import styles from "./index.module.scss";

interface CustomersListProps {
  icon: ReactNode;
  title: string;
}

export default function ItemCard({ title, icon }: CustomersListProps) {
  return (
    <div className={styles["customer-container"]}>
      <div>{icon}</div>
      <div>{title}</div>
    </div>
  );
}
