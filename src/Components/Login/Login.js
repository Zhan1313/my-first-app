import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login, logout, setAuthLogin} from "../../Redux/auth-reducer";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../Utils/validators/validators";
import {Redirect} from "react-router-dom";

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
        props.login(formData);
    }
    if(props.isAuth) return <Redirect to={'/profile'}/>
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login, logout})(Login);