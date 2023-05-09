import { ReactNode, useState } from 'react';
import styles from './index.module.scss';
import { ImSpinner9 } from "react-icons/im";

interface ButtonProps {
    isLoading?: boolean;
    error?: boolean;
    success?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    errorMessage?: string;
    title?: string;
    children?: ReactNode;
}

export function Button({
    isLoading = false,
    error = false,
    success,
    onClick,
    disabled = false,
    errorMessage = 'There was an error while trying to submit this form',
    title,
    children,
}: ButtonProps) {
    return (
        <>
            <button
                type="submit"
                className={styles["button"]}
                onClick={disabled || isLoading ? undefined : onClick}
                title={title}
            >
                {isLoading ? (
                    <ImSpinner9 className={styles["spinner"]} />
                ) : (
                    children
                )}
            </button>
            {error && <div className={styles['error-message']}>{errorMessage}</div>}
        </>
    );
}
