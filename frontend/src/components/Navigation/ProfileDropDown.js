import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import './ProfileDropDown.css';
import { useSelector } from 'react-redux';
import { setModal } from '../../store/modal';

function ProfileDropDown() {
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        dispatch(setModal(false));
        history.replace("/");
      };

    return(
      <div id="profile-dropdown" className="hidden">
        <div className="arrow-up"></div>
        <ul id= "profile-dropdown-content" className="hidden open-sans">
          <li><Link to={`/${sessionUser.id}/favorites`}>Saved homes</Link></li>
          <li><Link to="/in-process">Saved searches</Link></li>
          <li><Link to="in-process">Recently Viewed</Link></li>
          <Link to={`/${sessionUser.id}/homes`}><li>Your home</li></Link>
          <li><Link to={`/${sessionUser.id}/homes`}>Renter Hub</Link></li>
          <li><Link to="/in-process">Account settings</Link></li>
          <li onClick={logout}>
            <button>Sign out</button>
          </li>
        </ul>
      </div>
    )
}

export default ProfileDropDown;