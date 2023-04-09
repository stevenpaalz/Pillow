import "./YourHomes.css";
import { useParams } from "react-router-dom";

function YourHomes() {
    const userId = useParams().id;

    return(
        <h1>Current user: {userId}</h1>
    )
}

export default YourHomes;