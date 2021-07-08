import React from 'react'
import {InjectedFormProps, reduxForm, Field} from "redux-form";


type FormDataType  = {
    login : string
    password : string
    rememberMe : boolean
}

const LoginForm : React.FC<InjectedFormProps<FormDataType>>  = (props) => {
    // @ts-ignore
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"login"} placeholder={"Login"} component={"input"}/>
            </div>
            <div>
                <Field name={"password"} placeholder={"Password"} component={"input"}/>
            </div>
            <div>
                <Field name={"rememberMe"} type={"checkbox"} component={"input"} />
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form : 'login'
})(LoginForm)


const Login = () => {

    const onSubmit = (formData : FormDataType )=> {
        console.log(formData)
    }
    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )


}

export default Login