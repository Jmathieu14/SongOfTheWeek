class SoundCloudPlaylistRequest {
    url: string;
    playlist_id: string | null | undefined;
    constructor() {
        this.url = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/{playlistId}\
        &color=%23ff5500\
        &auto_play=false\
        &hide_related=false\
        &show_comments=true\
        &show_user=true\
        &show_reposts=false\
        &show_teaser=false\
        &visual=false";
        this.url = this.url.replace(/\s+/g, '');
    }

    setPlaylistId(playlistId: string) {
        this.playlist_id = playlistId;
        this.url = this.url.replace("{playlistId}", playlistId);
        console.log(this.url);
        return this;
    }

    build() {
        return this;
    }
}

export default SoundCloudPlaylistRequest;