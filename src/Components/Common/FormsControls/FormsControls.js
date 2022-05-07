import React from "react";
import styles from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}) => {
    return (
        <div>
            <div className={styles.formControls + '' + styles.error}>
                <textarea {...input} {...props}/>
            </div>
            <span>'some error'</span>
        </div>
    )
}