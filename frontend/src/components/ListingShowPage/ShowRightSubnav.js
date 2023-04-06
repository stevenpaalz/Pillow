import "./ShowRightSubnav.css";

function ShowRightSubnav() {

    const clickOverview = (e) => {
        const overview = document.querySelector('#show-right-subnav li:first-child');
        const facts = document.querySelector('#show-right-subnav li:last-child');
        overview.classList.add('selected');
        facts.classList.remove('selected');
    }

    const clickFacts = () => {
        const overview = document.querySelector('#show-right-subnav li:first-child');
        const facts = document.querySelector('#show-right-subnav li:last-child');
        overview.classList.remove('selected');
        facts.classList.add('selected');
    }

    return(
        <ul id="show-right-subnav">
            <li onClick={clickOverview} className="selected">Overview</li>
            <li onClick={clickFacts}>Facts and features</li>
        </ul>
    )
}

export default ShowRightSubnav;