import './BuyDropDown.css';
import { Link } from 'react-router-dom';

function BuyDropDown() {

    return(
        <div className='main-dropdown'>
            <div id='buy-dropdown' className="dropdown-subnav">
                <div>
                    <h3>Homes for sale</h3>
                    <ul id='buy-dropdown-col1' className='main-dropdown-col'>
                        <li><Link to="/homes/Sale">Homes for sale</Link></li>
                        <li><Link to="/homes/Sale">Foreclosures</Link></li>
                        <li><Link to="/homes/Sale">For sale by owner</Link></li>
                        <li><Link to="/homes/Sale">Open houses</Link></li>
                        <li><Link to="/homes/Sale">New construction</Link></li>
                        <li><Link to="/homes/Sale">Coming soon</Link></li>
                        <li><Link to="/homes/Sale">Recent home sales</Link></li>
                        <li><Link to="/homes/Sale">All homes</Link></li>
                    </ul>
                </div>
                <div className='not-first-col-main-dropdown'>
                    <h3>Resources</h3>
                        <ul id='buy-dropdown-col2' className='main-dropdown-col'>
                            <li className="no-click">Buyers Guide</li>
                            <li className="no-click">Foreclosure center</li>
                            <li className="no-click">Real estate app</li>
                            <li className="no-click">Down payment assistance</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default BuyDropDown;