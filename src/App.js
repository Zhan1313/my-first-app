import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Stories from "./Components/Stories/Stories";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


const App = ({state, dispatch, store}) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar friendsData={state.sideBar.friendsData}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer
                               store={store}
                               dispatch={dispatch}/>}/>
                    <Route path='/profile'
                           render={ () => <Profile
                               store={store}
                               dispatch={dispatch}/>}/>
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
