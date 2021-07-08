import React from 'react'
import {InjectedFormProps, WrappedFieldProps} from "redux-form";
import styles from './FormsControls.module.css'

export const TextArea: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <FormControl meta={meta} input={input} children={<textarea {...input} {...props}/>}/>
    )
}

export const Input: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <FormControl meta={meta} input={input} children={<input {...input} {...props}/>}/>
    )
}

export const FormControl: React.FC<WrappedFieldProps> = ({children, input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}