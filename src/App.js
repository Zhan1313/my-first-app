import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Stories from "./Components/Stories/Stories";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginContainer from "./Components/Login/Login";
import Table from "./Components/Table/Table";

const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer />}/>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer />}/>
                <Route path='/users' render={ () => <UsersContainer/>}/>
                <Route path='/login' render={ () => <LoginContainer />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/stories' render={ () => <Stories/>}/>
                <Route path='/settings' render={ () => <Settings/>}/>
                <Route path='/table' render={ () => <Table/>}/>

            </div>
        </div>
    )
}

export default App;
