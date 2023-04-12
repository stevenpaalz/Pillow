import './RentDropDown.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RentDropDown() {
    const sessionUser = useSelector(state => state.session.user)

    return(
        <div className='main-dropdown-2'>
            <div id='rent-dropdown' className="dropdown-subnav">
                <div>
                    <h3>Search for Rentals</h3>
                    <ul id='rent-dropdown-col1' className='main-dropdown-col'>
                        <li><Link to="/homes">Rental Buildings</Link></li>
                        <li><Link to="/homes">Apartments for rent</Link></li>
                        <li><Link to="/homes">Houses for rent</Link></li>
                        <li><Link to="/homes">All rental listings</Link></li>
                        <li><Link to="/homes">All rental buildings</Link></li>
                    </ul>
                </div>
                <div className='not-first-col-main-dropdown'>
                    <h3>Renter Hub</h3>
                        <ul id='rent-dropdown-col2' className='main-dropdown-col'>
                            <li><Link to="/in-process">Buyers Guide</Link></li>
                            <li><Link to="/in-process">Your rental</Link></li>
                            <li><Link to="/in-process">Messages</Link></li>
                        </ul>
                </div>
                <div className='not-first-col-main-dropdown'>
                    <h3>Resources</h3>
                        <ul id='rent-dropdown-col3' className='main-dropdown-col'>
                            <li><Link to="/in-process">Affordability calculator</Link></li>
                            <li><Link to="/in-process">Renters guide</Link></li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default RentDropDown;