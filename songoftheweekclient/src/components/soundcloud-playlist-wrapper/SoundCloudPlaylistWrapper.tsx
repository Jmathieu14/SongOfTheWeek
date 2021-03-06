import React from 'react';
import { SoundCloudPlaylistWrapperModel } from '../../models/SoundCloudPlaylistWrapperModel';
import { SoundCloudPlaylistWrapperPropsModel } from '../../models/SoundCloudPlaylistWrapperPropsModel';
import './SoundCloudPlaylistWrapper.css';
var SoundcloudWidget = require('soundcloud-widget')


class SoundCloudPlaylistWrapper extends React.Component<SoundCloudPlaylistWrapperPropsModel, {}> {
    iframe: HTMLIFrameElement | null | undefined;
    soundcloudWidget: any = null;
    mySounds = [];
    delay: number;
    soundCloudPlaylistWrapperConfig: SoundCloudPlaylistWrapperModel;

    constructor(props: any) {
        super(props);
        this.soundCloudPlaylistWrapperConfig = props.soundCloudPlaylistWrapperConfig;
        this.delay = props.delay;

        this.loadSoundsFromWidget = this.loadSoundsFromWidget.bind(this);
        this.skipToLastSong = this.skipToLastSong.bind(this);
        this.playLatestSong = this.playLatestSong.bind(this);
    }

    delaySkipToLastSong() {
        setTimeout(() => {
            this.loadSoundsFromWidget(this.skipToLastSong)
        }, this.delay);
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
            <div className="soundcloud-playlist-wrapper">
                <div className="play-latest">
                    <button className="btn btn-primary"
                        onClick={this.playLatestSong}>Play the Latest from {this.soundCloudPlaylistWrapperConfig.playlist_name}!</button>
                </div>
                <iframe title="soundcloud-playlist" className="soundcloud-playlist" width="100%" height="300" scrolling="no" allow="autoplay"
                    src={this.soundCloudPlaylistWrapperConfig.playlist_request.url}>
                </iframe>
                <div className="soundcloud-embedded-playlist">
                    <a className="title" href={this.soundCloudPlaylistWrapperConfig.playlist_creator_url} title={this.soundCloudPlaylistWrapperConfig.playlist_creator_aria} target="_blank" rel="noopener noreferrer">Spl!t Personal!ty</a>
                     ·
                    <a className="title" href={this.soundCloudPlaylistWrapperConfig.playlist_url} title={this.soundCloudPlaylistWrapperConfig.playlist_name} target="_blank" rel="noopener noreferrer">
                        {this.soundCloudPlaylistWrapperConfig.playlist_name}</a>
                </div>
            </div>
        );
    }
}

export default SoundCloudPlaylistWrapper;