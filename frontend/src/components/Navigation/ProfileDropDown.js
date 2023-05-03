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

    const logout = async (e) => {
        e.preventDefault();
        const res = await dispatch(sessionActions.logout());
        if (res.ok) {
          dispatch(setModal(false));
          await history.replace("/");
          window.location.reload();
        }
      };

    return(
      <div id="profile-dropdown" className="hidden">
        <div className="arrow-up"></div>
        <ul id= "profile-dropdown-content" className="hidden open-sans">
          <Link to={`/${sessionUser.id}/favorites`}><li>Saved homes</li></Link>
          <Link to={`/${sessionUser.id}/favorites`}><li>Recently Viewed</li></Link>
          <Link to={`/${sessionUser.id}/homes`}><li>Your homes</li></Link>
          <Link to={`/${sessionUser.id}/homes`}><li>Renter Hub</li></Link>
          <li onClick={logout}>
            <button>Sign out</button>
          </li>
        </ul>
      </div>
    )
}

export default ProfileDropDown;