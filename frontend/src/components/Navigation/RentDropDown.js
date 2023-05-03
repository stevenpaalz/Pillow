import './RentDropDown.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../store/modal';

function RentDropDown() {
    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory();
    const dispatch = useDispatch();

    return(
        <div className='main-dropdown-2'>
            <div id='rent-dropdown' className="dropdown-subnav">
                <div>
                    <h3>Search for Rentals</h3>
                    <ul id='rent-dropdown-col1' className='main-dropdown-col'>
                        <li><Link to="/homes/Rent">Rental Buildings</Link></li>
                        <li><Link to="/homes/Rent">Apartments for rent</Link></li>
                        <li><Link to="/homes/Rent">Houses for rent</Link></li>
                        <li><Link to="/homes/Rent">All rental listings</Link></li>
                        <li><Link to="/homes/Rent">All rental buildings</Link></li>
                    </ul>
                </div>
                <div className='not-first-col-main-dropdown'>
                    <h3>Renter Hub</h3>
                        <ul id='rent-dropdown-col2' className='main-dropdown-col'>
                            <li className="no-click">Buyers Guide</li>
                            <li onClick={() => {sessionUser ? history.replace(`/${sessionUser.id}/homes`) : dispatch(setModal(true))}}>Your rental</li>
                            <li className="no-click">Messages</li>
                        </ul>
                </div>
                <div className='not-first-col-main-dropdown'>
                    <h3>Resources</h3>
                        <ul id='rent-dropdown-col3' className='main-dropdown-col'>
                            <li className="no-click">Affordability calculator</li>
                            <li className="no-click">Renters guide</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default RentDropDown;