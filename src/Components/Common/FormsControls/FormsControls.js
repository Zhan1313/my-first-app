import React from "react";
import styles from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <div>
            <div>
                <textarea {...input} {...props} className={hasError && styles.error}/>
            </div>
            {hasError && <span className={styles.errorSpan}>{meta.error}</span>}
        </div>
    )
}