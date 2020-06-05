import SoundCloudPlaylistRequest from "../models/SoundCloudPlaylistRequest";

let playlist_id = "337454166"

let playlistRequest: SoundCloudPlaylistRequest = new SoundCloudPlaylistRequest().setPlaylistId(playlist_id).build();

let songOfTheWeekConfig = { 
    "playlist_url": "https://soundcloud.com/spltpersonalty/sets/al1en-1nvaz-0n-sponsored-by",
    "playlist_id": playlist_id,
    "playlist_request": playlistRequest
 };


export default songOfTheWeekConfig;
