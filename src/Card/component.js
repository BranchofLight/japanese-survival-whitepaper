import React from "react";
import "./style.scss";
import CircularAudioPlayer from "../CircularAudioPlayer/component";

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    getTypeEmoji(type) {
        switch(type) {
            case "LISTEN":
                return "👂";
            case "SPEAK":
                return "🗣️";
            case "ALL":
                return "👂🗣️";
            default:
                return "";
        }
    }

    render() {
        const props = this.props.data;
        console.log(props);
        return (
            <div className="card">
                <div className="header">
                    <h2>{props.english}</h2>
                    <span className="type">{this.getTypeEmoji(props.type)}</span>
                </div>
                <div className="container">
                    <div className="content">
                        <div>{props.kanji}</div>
                        <div>{props.kana}</div>
                        <div>{props.romaji}</div>
                    </div>
                    <div className="audio">
                        <CircularAudioPlayer
                            audio={props.audio.slow || props.audio.woman}
                            symbol={props.audio.slow ? "遅" : "女"}
                        />
                        <CircularAudioPlayer
                            audio={props.audio.fast || props.audio.man}
                            symbol={props.audio.fast ? "早" : "男"}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
