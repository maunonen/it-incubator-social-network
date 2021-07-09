import React from 'react'
import {InjectedFormProps, reduxForm, Field} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../utils/validators";
import {connect, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const maxLength15 = maxLengthCreator(15)
const maxLength30 = maxLengthCreator(30)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={"email"}
                    placeholder={"Email"}
                    component={Input}
                    validate={[required, maxLength30]}
                />
            </div>
            <div>
                <Field
                    name={"password"}
                    placeholder={"Password"}
                    type={"password"}
                    component={Input}
                    validate={[required, maxLength30]}
                />
            </div>
            <div>
                <Field name={"rememberMe"} type={"checkbox"} component={Input}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: "login"
})(LoginForm)

export type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

const Login: React.FC<LoginPropsType> = (props) => {
    const isAuth = useSelector((state : AppStateType)  => (state.auth.isAuth))
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (isAuth) {
        return (
            <Redirect to={"/profile"}/>
        )
    }
    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}

export default connect(null, {login})(Login)