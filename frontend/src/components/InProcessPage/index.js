import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./InProcessPage.css";

function InProcessPage() {
    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory();

    return(
        <div id="in-process-page" className='open-sans'>
            <h1><i className="fa-solid fa-screwdriver-wrench"></i><i className="fa-solid fa-toolbox"></i><i className="fa-solid fa-helmet-safety"></i></h1>
            <h2>Feature Development In Process</h2>
            <h3>You should check out one of the following features:</h3>
            <ul>
                <li><Link to="/">Splash Page</Link></li>
                <li><Link to="/homes/Sale">Homes + Map</Link></li>
                <li><Link to="/sell">Create Listing Page</Link></li>
                <li onClick={()=>{if (sessionUser) {history.replace(`/${sessionUser.id}/homes`)}}}><Link to="/">Your Homes</Link></li>
                <li onClick={()=>{if (sessionUser) {history.replace(`/${sessionUser.id}/favorites`)}}}><Link to="/">Saved Homes</Link></li>
            </ul>
        </div>
    )
}

export default InProcessPage;