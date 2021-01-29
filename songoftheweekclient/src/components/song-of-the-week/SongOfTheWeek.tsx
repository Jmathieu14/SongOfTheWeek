import React from 'react';
import './SongOfTheWeek.css';
import songOfTheWeekConfig from '../../config/SongOfTheWeekConfig';
var SoundcloudWidget = require('soundcloud-widget')


class SongOfTheWeek extends React.Component {
    iframe: HTMLIFrameElement | null | undefined;
    soundcloudWidget: any = null;
    mySounds = [];
    DELAY = 2500;

    constructor(props: any) {
        super(props);
        this.loadSoundsFromWidget = this.loadSoundsFromWidget.bind(this);
        this.skipToLastSong = this.skipToLastSong.bind(this);
        this.playLatestSong = this.playLatestSong.bind(this);
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

    playLatestSong() {
        this.skipToLastSong();
        this.soundcloudWidget.play();
    }

    componentDidMount() {
        this.iframe = document.querySelector('iframe');
        this.soundcloudWidget = new SoundcloudWidget(this.iframe);
        this.delaySkipToLastSong();
    }

    render() {
        return (
            <div className="song-of-the-week">
                <div className="play-latest">
                    <button className="btn btn-primary"
                        onClick={this.playLatestSong}>Play the Latest Song of the Week!</button>
                </div>
                <iframe title="song-of-the-week-playlist" className="soundcloud-playlist" width="100%" height="300" scrolling="no" allow="autoplay"
                    src={songOfTheWeekConfig.playlist_request.url}>
                </iframe>
                <div className="soundcloud-embedded-playlist">
                    <a className="title" href={songOfTheWeekConfig.playlist_creator_url} title={songOfTheWeekConfig.playlist_creator_aria} target="_blank" rel="noopener noreferrer">Spl!t Personal!ty</a>
                     ·
                    <a className="title" href={songOfTheWeekConfig.playlist_url} title={songOfTheWeekConfig.playlist_name} target="_blank" rel="noopener noreferrer">
                        {songOfTheWeekConfig.playlist_name}</a>
                </div>
            </div>
        );
    }
}

export default SongOfTheWeek;