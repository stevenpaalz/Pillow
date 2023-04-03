import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './ProfileDropDown.css';

function ProfileDropDown() {
    const dispatch = useDispatch();

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
      };

    return(
      <div id="profile-dropdown" className="hidden">
        <div className="arrow-up"></div>
        <ul id= "profile-dropdown-content" className="hidden open-sans">
          <li><Link to="/">Saved homes</Link></li>
          <li><Link to="/">Saved searches</Link></li>
          <li><Link to="/">Recently Viewed</Link></li>
          <li><Link to="/">Your home</Link></li>
          <li><Link to="/">Renter Hub</Link></li>
          <li><Link to="/">Account settings</Link></li>
          <li>
            <button onClick={logout}>Sign out</button>
          </li>
        </ul>
      </div>
    )
}

export default ProfileDropDown;