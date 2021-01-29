import SoundCloudPlaylistRequest from "../models/SoundCloudPlaylistRequest";

export interface SoundCloudPlaylistWrapperModel {
    "playlist_url": string,
    "playlist_request": SoundCloudPlaylistRequest,
    "playlist_creator": string,
    "playlist_creator_url": string,
    "playlist_creator_aria": string,
    "playlist_name": string
}
