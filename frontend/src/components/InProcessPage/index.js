import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./InProcessPage.css";

function InProcessPage() {
    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory();

    return(
        <div id="in-process-page" className='open-sans'>
            <h1><i class="fa-solid fa-screwdriver-wrench"></i><i class="fa-solid fa-toolbox"></i><i class="fa-solid fa-helmet-safety"></i></h1>
            <h2>I only had 2 weeks to build this, what did you expect?</h2>
            <h3>You should check out one of the following features:</h3>
            <ul>
                <li><Link to="/">Splash Page</Link></li>
                <li><Link to="/homes">Homes + Map</Link></li>
                <li><Link to="/sell">Create Listing Page</Link></li>
                <li onClick={()=>{if (sessionUser) {history.replace(`/${sessionUser.id}/homes`)}}}><Link to="/">Your Homes</Link></li>
                <li onClick={()=>{if (sessionUser) {history.replace(`/${sessionUser.id}/favorites`)}}}><Link to="/">Saved Homes</Link></li>
            </ul>
        </div>
    )
}

export default InProcessPage;