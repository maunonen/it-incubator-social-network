import React from 'react'
import {InjectedFormProps, reduxForm, Field} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../utils/validators";


type FormDataType  = {
    login : string
    password : string
    rememberMe : boolean
}

const maxLength15 = maxLengthCreator(15)
const maxLength30 = maxLengthCreator(30)

const LoginForm : React.FC<InjectedFormProps<FormDataType>>  = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={"login"}
                    placeholder={"Login"}
                    component={Input}
                    validate={[required, maxLength15]}
                />
            </div>
            <div>
                <Field
                    name={"password"}
                    placeholder={"Password"}
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
    form : "login"
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