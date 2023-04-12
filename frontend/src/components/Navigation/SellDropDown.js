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
                        <li><Link to="/sell">See your home's Zestimate</Link></li>
                        <li><Link to="/sell">Home values</Link></li>
                        <li><Link to="/sell">Sellers guide</Link></li>

                    </ul>
                </div>
                <div className='not-first-col-main-dropdown'>
                    <h3>Selling Options</h3>
                        <ul id='sell-dropdown-col2' className='main-dropdown-col'>
                            <li><Link to="/sell">Find a seller's agent</Link></li>
                            <li><Link to="/sell">Post For Sale by Owner</Link></li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default SellDropDown;