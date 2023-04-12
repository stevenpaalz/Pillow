import './BuyDropDown.css';
import { Link } from 'react-router-dom';

function BuyDropDown() {

    return(
        <div className='main-dropdown'>
            <div id='buy-dropdown' className="dropdown-subnav">
                <div>
                    <h3>Homes for sale</h3>
                    <ul id='buy-dropdown-col1' className='main-dropdown-col'>
                        <li><Link to="/homes">Homes for sale</Link></li>
                        <li><Link to="/homes">Foreclosures</Link></li>
                        <li><Link to="/homes">For sale by owner</Link></li>
                        <li><Link to="/homes">Open houses</Link></li>
                        <li><Link to="/homes">New construction</Link></li>
                        <li><Link to="/homes">Coming soon</Link></li>
                        <li><Link to="/homes">Recent home sales</Link></li>
                        <li><Link to="/homes">All homes</Link></li>
                    </ul>
                </div>
                <div className='not-first-col-main-dropdown'>
                    <h3>Resources</h3>
                        <ul id='buy-dropdown-col2' className='main-dropdown-col'>
                            <li><Link to="/in-process">Buyers Guide</Link></li>
                            <li><Link to="/in-process">Foreclosure center</Link></li>
                            <li><Link to="/in-process">Real estate app</Link></li>
                            <li><Link to="/in-process">Down payment assistance</Link></li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default BuyDropDown;