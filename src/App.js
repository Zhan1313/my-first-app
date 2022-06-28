import React, {Suspense} from "react";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Stories from "./Components/Stories/Stories";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginContainer from "./Components/Login/Login";
import Table from "./Components/Table/Table";
import store from "./Redux/redux-store";
import {Provider} from "react-redux";

//import ProfileContainer from "./Components/Profile/ProfileContainer";
//import DialogsContainer from "./Components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'))


const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => {
                           return <Suspense fallback={<div>loading...</div>}>
                               <DialogsContainer/>
                           </Suspense>
                       }}/>
                <Route path='/profile/:userId?'
                       render={() => {
                           return <Suspense fallback={<div>loading...</div>}>
                               <ProfileContainer/>
                           </Suspense>}}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <LoginContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/stories' render={() => <Stories/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/table' render={() => <Table/>}/>

            </div>
        </div>
    )
}

const SamuraiApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    )
};

export default SamuraiApp;