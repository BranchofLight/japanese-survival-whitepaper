import React from "react";
import Card from "../Card/component";
import "./style.scss";
import * as data from "../../data/phrases.json";

const Homepage = (props) => {
    return (
        <div>
            {data.phrases.map((d, i) => (
                <Card key={i} data={d} />
            ))}
        </div>
    );
};

export default Homepage;
