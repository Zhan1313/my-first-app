import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Stories from "./Components/Stories/Stories";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer />}/>
                <Route path='/profile'
                       render={() => <ProfileContainer />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/stories' render={ () => <Stories/>}/>
                <Route path='/settings' render={ () => <Settings/>}/>
                <Route path='/users' render={ () => <UsersContainer/>}/>

            </div>
        </div>
    )
}

export default App;
