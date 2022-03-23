import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
import FriendsContainer from "./Friends/FriendsContainer";

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' activeClassName={s.activeLink}> News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' activeClassName={s.activeLink}> Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/stories' activeClassName={s.activeLink}> Stories</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings'> Settings</NavLink>
        </div>
        <div>
            <FriendsContainer />
        </div>
    </nav>
}
export default Navbar;