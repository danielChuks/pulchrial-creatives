"use client";
import styles from "./index.module.scss";
import banner from "../../../public/images/pablo-sign-in 1.svg";
import logo from "../../../public/images/Group.svg";
import { useState } from "react";
import Image from "next/image";

const initialValues = {
  name: {
    touched: false,
    value: "",
    error: "",
  },

  password: {
    touched: false,
    value: "",
    error: "",
  },
};

enum KEYS {
  NAME = "name",
  PASSWORD = "password",
}

export default function LoginComponent() {
  const [formData, setFormData] = useState(initialValues);
  const { name, password } = formData;

  const handleChange = (e: any) => {
    const name: KEYS = e.target.name;
    const value: string = e.target.value;
    setFormData((data) => ({
      ...data,
      [name]: {
        ...data[name],
        value,
        error: value === "" ? "Field can not be empty" : "",
        touched: true,
      },
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(name.value, password.value);
  };

  return (
    <div className={styles["login-container"]}>
      <div className={styles["content-container"]}>
        <div className={styles["image-section"]}>
          <div className={styles["logo"]}>
            <Image src={logo} height={36} width={138.44} alt="banner" />
          </div>
          <div className={styles["banner"]}>
            <Image src={banner} height={337.57} width={600} alt="banner" />
          </div>
        </div>

        <div className={styles["form-section-container"]}>
          <div className={styles["top-text"]}>Welcome!</div>
          <div className={styles["sub-text"]}> Enter details to login</div>

          <div className={styles["input-container"]}>
            <input
              name={KEYS.NAME}
              placeholder="Email"
              value={name.value}
              type="text"
              onChange={handleChange}
            />
            <input
              name={KEYS.PASSWORD}
              placeholder="Password"
              value={password.value}
              type="password"
              onChange={handleChange}
            />

            <span>Forgot password?</span>
            <button className={styles["button"]} onClick={handleSubmit}>
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
