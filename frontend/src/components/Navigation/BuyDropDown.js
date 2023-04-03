import './BuyDropDown.css';
import { Link } from 'react-router-dom';

function BuyDropDown() {

    return(
        <div className='main-dropdown' id='buy-dropdown'>
            <div className="dropdown-subnav">
                <h3>Homes for sale in your area</h3>
                <div>
                <ul className='col1'>
                    <li><Link to="/">Homes for sale</Link></li>
                    <li><Link to="/">Foreclosures</Link></li>
                    <li><Link to="/">For sale by owner</Link></li>
                    <li><Link to="/">Open houses</Link></li>
                </ul>
                <ul className='col1'>
                    <li><Link to="/">New construction</Link></li>
                    <li><Link to="/">Coming soon</Link></li>
                    <li><Link to="/">Recent home sales</Link></li>
                    <li><Link to="/">All homes</Link></li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default BuyDropDown;