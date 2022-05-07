import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {setAuthLogin} from "../../Redux/auth-reducer";
import {Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../Utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'email'} component={Input}
                       name={'email'} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'password'} component={Input}
                       name={'password'} validate={[required]} type={'password'}/>
            </div>
            <div>
                <Field type={"checkbox"} name={'rememberMe'} component={Input}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.setAuthLogin(formData);
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({a: 15})
const LoginContainer = connect(mapStateToProps, {setAuthLogin})(Login);
export default LoginContainer;