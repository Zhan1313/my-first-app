import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Stories from "./Components/Stories/Stories";
import Settings from "./Components/Settings/Settings";


const App = ({state, dispatch}) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar friendsData={state.sideBar.friendsData}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <Dialogs
                               dialogItems={state.dialogsPage.dialogItems}
                               dialogMessages={state.dialogsPage.dialogMessages}
                               dispatch={dispatch}
                               newDialogMessageText={state.dialogsPage.newDialogsMessageText}/>}/>
                    <Route path='/profile'
                           render={ () => <Profile
                               postsData={state.profilePage.postsData}
                               dispatch={dispatch}
                               newPostText={state.profilePage.newPostText} />}/>
                    <Route path='/news' render={ () => <News/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/stories' component={Stories}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
