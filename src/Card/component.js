import React from "react";
import "./style.scss";
import CircularAudioPlayer from "../CircularAudioPlayer/component";

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const props = this.props.data;
        console.log(props);
        return (
            <div className="card">
                <div className="header">
                    <h2>{props.english}</h2>
                </div>
                <div className="container">
                    <div className="content">
                        <div>{props.kanji}</div>
                        <div>{props.kana}</div>
                        <div>{props.romaji}</div>
                    </div>
                    <div className="audio">
                        <CircularAudioPlayer
                            audio={props.audio.slow}
                            symbol={"遅"}
                        />
                        <CircularAudioPlayer
                            audio={props.audio.fast}
                            symbol={"早"}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
