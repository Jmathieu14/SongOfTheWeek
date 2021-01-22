import React from 'react';
import './SongOfTheWeek.css';
import songOfTheWeekConfig from '../../config/SongOfTheWeekConfig';
var SoundcloudWidget = require('soundcloud-widget')


class SongOfTheWeek extends React.Component {
    iframe: HTMLIFrameElement | null | undefined;
    soundcloudWidget: any = null;
    mySounds = [];
    DELAY = 2250;

    constructor(props: any) {
        super(props);
        this.loadSoundsFromWidget = this.loadSoundsFromWidget.bind(this);
        this.skipToLastSong = this.skipToLastSong.bind(this);
    }

    delaySkipToLastSong() {
        setTimeout(() => {
            this.loadSoundsFromWidget(this.skipToLastSong)
        }, this.DELAY);
    }

    loadSoundsFromWidget(_callback: any) {
        this.soundcloudWidget.getSounds().then((result: []) => {
            this.mySounds = result;
            _callback();
        })
    }

    skipToLastSong() {
        if (this.mySounds !== [] && !!this.soundcloudWidget) {
            this.soundcloudWidget.skip(this.mySounds.length - 1);
            this.soundcloudWidget.pause();
        }
    }

    componentDidMount() {
        this.iframe = document.querySelector('iframe');
        this.soundcloudWidget = new SoundcloudWidget(this.iframe);
        this.delaySkipToLastSong();
    }

    render() {
        return (
            <div className="song-of-the-week">
                <iframe title="song-of-the-week-playlist" id="soundcloud-playlist" width="75%" height="300" scrolling="no" allow="autoplay"
                    src={songOfTheWeekConfig.playlist_request.url}>
                </iframe>
                <div className="soundcloud-embedded-playlist">
                    <a className="title" href="https://soundcloud.com/spltpersonalty" title="Spl!t Personal!ty" target="_blank" rel="noopener noreferrer">Spl!t Personal!ty</a>
                     ·
                    <a className="title" href={songOfTheWeekConfig.playlist_url} title="AL1EN 1NVAZ!0N - Sponsored by Tear Out Dubstep" target="_blank" rel="noopener noreferrer">
                        AL1EN 1NVAZ!0N - Sponsored by Tear Out Dubstep</a>
                </div>
            </div>
        );
    }
}

export default SongOfTheWeek;