import React from 'react';
import back from "../../images/work6.jpg";
import './Home.css';
import * as todoConstants from '../../Constants/todoConstants';

const Home = () => {
    return (
        <div>
            <img style={{ width: "100%" }} src={back} alt="background"></img>
            <div className="transbox">
                <p>{todoConstants.planWork}</p>
                <p style={{ textAlign: "center", fontSize: "40px" }}>{todoConstants.beEfficient}</p>
            </div>
        </div>
    )
}

export default Home;