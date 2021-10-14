import React from "react";
import "./style.scss";

class CircularAudioPlayer extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);
        this.state = {
            isPlaying: false,
            audio: new Audio(`data/audio/${props.audio}.mp3`),
        };

        this.state.audio.onended = () => {
            this.setState({ isPlaying: false });
        };
    }

    render() {
        return (
            <button
                className={
                    `audio-btn` + `${this.state.isPlaying ? " paused" : ""}`
                }
                onClick={() => {
                    if (!this.state.isPlaying) {
                        this.state.audio.currentTime = 0;
                        this.state.audio.play();
                    } else {
                        this.state.audio.pause();
                    }
                    this.setState({ isPlaying: !this.state.isPlaying });
                }}
                onPause={() => {
                    this.setState({ isPlaying: false });
                }}
            >
                {this.props.symbol}
            </button>
        );
    }
}

export default CircularAudioPlayer;
