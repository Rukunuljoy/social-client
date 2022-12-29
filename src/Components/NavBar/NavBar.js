import React, { useContext } from 'react';
import './NavBar.css'
import {Search, Person, Chat, Notifications} from '@mui/icons-material'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const NavBar = () => {
    const {user,logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
      logOut()
      .then()
      .catch(err => console.log(err))
    }
    return (
        <div className='navbarContainer'>
           <div className='navbarLeft'>
            <Link to='/'><span className='logo'>
                social Application
            </span></Link>
           </div>
           <div className='navbarCenter'>
            <div className='searchbar'>
                <Search className='searchIcon'/>
                <input placeholder='Search for friend,post or video' className='searchInput'></input>
            </div>
           </div>
           <div className='navbarRight'>
            <div className='navbarLinks'>
                <Link to='/'><span className='navbarLink'>Media</span></Link>
                <span className='navbarLink'>Message</span>
                <Link to='/about'><span className='navbarLink'>About</span></Link>
            </div>
            <div className='navbarIcon'>
                <div className='navbarIconItem'>
                    <Person/>
                    <span className='navbarIconBadge'>1</span>
                </div>
                <div className='navbarIconItem'>
                    <Chat/>
                    <span className='navbarIconBadge'>1</span>
                </div>
                <div className='navbarIconItem'>
                    <Notifications/>
                    <span className='navbarIconBadge'>1</span>
                </div>
            </div>
           {
            user?.email?
            <>
             <li className='font-semibold'>
            <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button>
            </li>
            </>
                : 
            <li className='font-semibold'><Link to="/login">Login</Link></li>
            
           }
           </div>
        </div>
    );
};

export default NavBar;