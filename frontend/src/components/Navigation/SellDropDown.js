import './SellDropDown.css';
import { Link } from 'react-router-dom';

function SellDropDown() {

    return(
        <div className='main-dropdown'>
            <div id='sell-dropdown' className="dropdown-subnav">
                <div>
                    <h3>Resources</h3>
                    <ul id='sell-dropdown-col1' className='main-dropdown-col'>
                        <li><Link to="/sell">Explore your options</Link></li>
                        <li className="no-click">See your home's Zestimate</li>
                        <li className="no-click">Home values</li>
                        <li className="no-click">Sellers guide</li>

                    </ul>
                </div>
                <div className='not-first-col-main-dropdown'>
                    <h3>Selling Options</h3>
                        <ul id='sell-dropdown-col2' className='main-dropdown-col'>
                            <li className="no-click">Find a seller's agent</li>
                            <li><Link to="/sell">Post For Sale by Owner</Link></li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default SellDropDown;