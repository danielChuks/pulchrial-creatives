"use client";
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Button } from "../shared/Button";
import { LoadingScreen } from "../shared/LoadingScreen";
import { useRouter } from "next/navigation";

const initialValues = {
    firstName: {
        value: "",
        error: "",
        touched: false,
    },
    lastName: {
        value: "",
        error: "",
        touched: false,
    },
    email: {
        value: "",
        error: "",
        touched: false,
    },
    password: {
        value: "",
        error: "",
        touched: false,
    },
    confirmPassword: {
        value: "",
        error: "",
        touched: false,
    },
};

enum KEYS {
    FIRSTNAME = "firstName",
    LASTNAME = "lastName",
    EMAIL = "email",
    PASSWORD = "password",
    CONFIRMPASSWORD = "confirmPassword",
}

export function RegisterComponent() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [formData, setFormData] = useState(initialValues);
    const { firstName, lastName, email, password, confirmPassword } = formData;

    const router = useRouter();

    const handleChange = (event: any) => {
        const name: KEYS = event.target.name;
        const value: string = event.target.value;

        setFormData((data) => ({
            ...data,
            [name]: {
                ...data[name],
                value,
                error: value === " " ? "Field cannot be empty" : value,
                touched: true,
            },
        }));
    };

    const formValid =
        firstName.value !== "" &&
        lastName.value !== "" &&
        email.value !== "" &&
        password.value !== "" &&
        confirmPassword.value !== "";

    const handleClick = async () => {
        setIsLoading(true);
        if (formValid === true) {
            setTimeout(() => {
                setIsLoading(false);
                setSuccess(true);
            }, 3000);
        } else {
            setIsLoading(false);
            setError(true);
        }
    };

    useEffect(() => {
        if (success === true) {
            router.push("/dashboard/home-page");
            setTimeout(() => {
                setSuccess(false);
            }, 3000);
        }
    }, [success]);

    return (
        <>
            {success ? (
                <LoadingScreen />
            ) : (
                <div className={styles["container"]}>
                    <div className={styles["image-section"]}>Image segment</div>
                    <div className={styles["form-section"]}>
                        <div className={styles["register-banner"]}>
                            Register Now
                        </div>
                        <div className={styles["form"]}>
                            <div>
                                <div className={styles["label"]}>
                                    {" "}
                                    First Name
                                </div>
                                <input
                                    name={KEYS.FIRSTNAME}
                                    type="firstName"
                                    placeholder="First name"
                                    value={firstName.value}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <div className={styles["label"]}>
                                    {" "}
                                    Last Name
                                </div>
                                <input
                                    name={KEYS.LASTNAME}
                                    type="lastName"
                                    placeholder="Last Name"
                                    value={lastName.value}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <div className={styles["label"]}>Email</div>
                                <input
                                    name={KEYS.EMAIL}
                                    type="email"
                                    placeholder="Email"
                                    value={email.value}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <div className={styles["label"]}>Password</div>
                                <input
                                    name={KEYS.PASSWORD}
                                    type="Password"
                                    placeholder="Password"
                                    value={password.value}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <div className={styles["label"]}>
                                    Confirm Password{" "}
                                </div>
                                <input
                                    name={KEYS.CONFIRMPASSWORD}
                                    type="Password"
                                    placeholder="Password"
                                    required
                                    value={confirmPassword.value}
                                    onChange={handleChange}
                                />
                            </div>

                            <Button
                                isLoading={isLoading}
                                error={error}
                                success={success}
                                onClick={handleClick}
                                disabled={disabled}
                                errorMessage="There was an error while trying to submit this form"
                                title="Submit"
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
