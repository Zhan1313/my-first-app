import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
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
            <h3>FRIENDS</h3>
            <Friends friendsData={props.friendsData}/>
        </div>
    </nav>
}
export default Navbar;