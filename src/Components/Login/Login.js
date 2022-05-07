import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {setAuthLogin} from "../../Redux/auth-reducer";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'email'} component={'input'} name={'email'}/>
            </div>
            <div>
                <Field placeholder={'password'} component={'input'} name={'password'} type={'password'}/>
            </div>
            <div>
                <Field type={"checkbox"} name={'rememberMe'} component={'input'}/>remember me
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