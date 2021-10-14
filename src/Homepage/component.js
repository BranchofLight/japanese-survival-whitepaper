import React from "react";
import Card from "../Card/component";
import "./style.scss";
import * as data from "../../data/phrases.json";

const Homepage = (props) => {
    return (
        <React.Fragment>
                <div className="title">
                    <h1>🌸 Japanese Survival Phrases</h1>
                </div>
                <div className="home container">
                    {data.phrases.map((d, i) => (
                        <Card key={i} data={d} />
                    ))}
                </div>
        </React.Fragment>
    );
};

export default Homepage;
