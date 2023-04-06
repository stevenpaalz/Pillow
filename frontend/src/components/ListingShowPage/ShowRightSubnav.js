import "./ShowRightSubnav.css";

function ShowRightSubnav() {

    const clickOverview = (e) => {
        const overview = document.querySelector('#show-right-subnav li:first-child');
        const facts = document.querySelector('#show-right-subnav li:last-child');
        const overviewSection = document.getElementById('show-details-overview');
        const showDetailsArea = document.getElementById('show-details-area');
        overview.classList.add('selected');
        facts.classList.remove('selected');
        overviewSection.scrollIntoView();
        showDetailsArea.scrollBy({top: -60});
    }

    const clickFacts = () => {
        const overview = document.querySelector('#show-right-subnav li:first-child');
        const facts = document.querySelector('#show-right-subnav li:last-child');
        const factSection = document.getElementById('show-details-facts');
        const showDetailsArea = document.getElementById('show-details-area');
        overview.classList.remove('selected');
        facts.classList.add('selected');
        factSection.scrollIntoView();
        showDetailsArea.scrollBy({top: -60});
    }

    return(
        <ul id="show-right-subnav">
            <li onClick={clickOverview} className="selected">Overview</li>
            <li onClick={clickFacts}>Facts and features</li>
        </ul>
    )
}

export default ShowRightSubnav;