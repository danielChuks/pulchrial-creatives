import React from "react";
import styles from "./index.module.scss";

export function RegisterComponent() {
    return (
        <div className={styles["container"]}>
            <div className={styles["image-section"]}>Image segment</div>
            <div className={styles["form-section"]}>
                <div className={styles["register-banner"]}>Register Now</div>
                <div className={styles["form"]}>
                    <div>
                        <div className={styles["label"]}> First Name</div>
                        <input
                            type="firstName"
                            placeholder="First name"
                            value=""
                        />
                    </div>
                    <div>
                        <div className={styles["label"]}> Last Name</div>
                        <input
                            type="lastName"
                            placeholder="Last Name"
                            value=""
                        />
                    </div>
                    <div>
                        <div className={styles["label"]}>Email</div>
                        <input type="email" placeholder="Email" value="" />
                    </div>
                    <div>
                        <div className={styles["label"]}>Password</div>
                        <input
                            type="Password"
                            placeholder="password"
                            value=""
                        />
                    </div>
                    <div>
                        <div className={styles["label"]}>Confirm Password </div>
                        <input type="password" placeholder="Password" />
                    </div>
                   
                </div>
            </div>
        </div>
    );
}
