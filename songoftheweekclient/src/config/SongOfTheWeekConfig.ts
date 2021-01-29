import SoundCloudPlaylistRequest from "../models/SoundCloudPlaylistRequest";

let playlist_id = "1192714402"

let playlistRequest: SoundCloudPlaylistRequest = new SoundCloudPlaylistRequest().setPlaylistId(playlist_id).build();

let songOfTheWeekConfig = { 
    "playlist_url": "https://soundcloud.com/spltpersonalty/sets/song-of-das-week-vol-2",
    "playlist_id": playlist_id,
    "playlist_request": playlistRequest,
    "playlist_creator": "Spl!t Personal!ty",
    "playlist_creator_url": "https://soundcloud.com/spltpersonalty",
    "playlist_creator_aria": "Split Personality",
    "playlist_name": "song Of das week vol. 2"
 };


export default songOfTheWeekConfig;
