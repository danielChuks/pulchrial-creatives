import styles from "./index.module.scss";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className={styles["container"]}>
      <div className={styles["nav-content"]}>
        <div>
          <Link href={"/"}>cubuk </Link>
        </div>
        <div>Home</div>
        <div>About</div>
        <div>Contanct us</div>
      </div>
    </div>
  );
}
