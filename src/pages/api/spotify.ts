import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import type { APIRoute } from 'astro';

class SpotifyClient {
    private _sdk: SpotifyApi;

    constructor() {
        try {
            this._sdk = SpotifyApi.withClientCredentials(
                process.env.SPOTIFY_CLIENT_ID ?? "",
                process.env.SPOTIFY_CLIENT_SECRET ?? ""
            );
            console.log("Success authenticating the client!");
        } catch (e) {
            console.log(e);
        }
    }
}

const client = new SpotifyClient();

export const getLikedSongs: APIRoute = () => {
    return 
}