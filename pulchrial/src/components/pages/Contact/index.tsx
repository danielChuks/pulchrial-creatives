import styles from "./index.module.scss";
import { TopNav } from "@/components/shared/TopNav";
import { Cards } from "./Displaycards";

export  function ContactComponent() {
    return (
        <div className={styles["container"]}>
            <TopNav />
            
        </div>
    );
}
