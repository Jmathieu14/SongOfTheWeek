import React from 'react';
import SoundCloudPlaylistRequest from '../../models/SoundCloudPlaylistRequest';
import { SoundCloudPlaylistWrapperModel } from '../../models/SoundCloudPlaylistWrapperModel';
import SoundCloudPlaylistWrapper from '../soundcloud-playlist-wrapper/SoundCloudPlaylistWrapper';


class SongOfTheWeek extends React.Component {
    songOfTheWeekConfig: SoundCloudPlaylistWrapperModel;
    delay = 2500;

    constructor(props: any) {
        super(props);
        let playlistRequest: SoundCloudPlaylistRequest = new SoundCloudPlaylistRequest().setPlaylistId("1192714402").build();
        this.songOfTheWeekConfig = {
            "playlist_url": "https://soundcloud.com/spltpersonalty/sets/song-of-das-week-vol-2",
            "playlist_request": playlistRequest,
            "playlist_creator": "Spl!t Personal!ty",
            "playlist_creator_url": "https://soundcloud.com/spltpersonalty",
            "playlist_creator_aria": "Split Personality",
            "playlist_name": "song Of das week vol. 2"
        } as SoundCloudPlaylistWrapperModel;
    }

    render() {
        return (
            <SoundCloudPlaylistWrapper
                key="song-of-the-week-playlist"
                delay={this.delay}
                soundCloudPlaylistWrapperConfig={this.songOfTheWeekConfig}
            />
        );
    }
}

export default SongOfTheWeek;