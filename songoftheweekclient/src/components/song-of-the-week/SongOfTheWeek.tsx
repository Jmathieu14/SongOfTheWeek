import React from 'react';
import './SongOfTheWeek.css';
import songOfTheWeekConfig from '../../config/SongOfTheWeekConfig';
var SoundcloudWidget = require('soundcloud-widget')


class SongOfTheWeek extends React.Component {
    iframe: HTMLIFrameElement | null | undefined;
    soundcloudWidget: any;
    mySounds = {};

    constructor(props: any) {
        super(props);
    }

    loadSoundsFromWidget() {
        this.soundcloudWidget.getSounds().then((result: {}) => {
            this.mySounds = result;
            console.log(this.mySounds);
        })
    }

    componentDidMount() {
        this.iframe = document.querySelector('iframe');
        console.log(this.iframe);
        this.soundcloudWidget = new SoundcloudWidget(this.iframe);
        this.loadSoundsFromWidget();
    }

    render() {
        return (
            <div className="song-of-the-week">
                <iframe width="75%" height="300" scrolling="no" allow="autoplay"
                    src={songOfTheWeekConfig.playlist_request.url}>
                </iframe>
                <div className="soundcloud-embedded-playlist">
                    <a className="title" href="https://soundcloud.com/spltpersonalty" title="Spl!t Personal!ty" target="_blank">Spl!t Personal!ty</a>
                     ·
                    <a className="title" href={songOfTheWeekConfig.playlist_url} title="AL1EN 1NVAZ!0N - Sponsored by Tear Out Dubstep" target="_blank">
                        AL1EN 1NVAZ!0N - Sponsored by Tear Out Dubstep</a>
                </div>
            </div>
        );
    }
}

export default SongOfTheWeek;