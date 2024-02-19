let accessToken;
const clientId = "3eb936d09d3049b5b59c1587a4de2a9a";
const redirectURL = "https://main--cdgjammming.netlify.app/";

const Spotify = {
    getAccessToken() {
        if (accessToken) return accessToken;
        const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
        const expiryTime =  window.location.href.match(/expires_in=([^&]*)/);

        if(tokenInURL && expiryTime) {
            accessToken = tokenInURL[1];
            const expiresIn = Number(expiryTime[1]);

            window.setTimeout(() => (accessToken = ""), expiresIn * 1000);

            window.history.pushState("Access token", null, "/");
            return accessToken;
        }

        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURL}`
        window.location = redirect;
    },

    search(term) {
        accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            method: "GET",
            headers: {Authorization: `Bearer ${accessToken}`},
        })
        .then(response => response.json())
        .then(jsonResponse => {
            if (!jsonResponse) {
                console.error("Response Error");
            }
            
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri,
            }))
        })
    },

    savePlaylist(name, trackUris) {
        if(!name || !trackUris) return;
        const aToken = Spotify.getAccessToken();
        const header = {Authorization: `Bearer ${aToken}`};
        let userId;
        return fetch(`https://api.spotify.com/v1/me`, {headers: header})
        .then(response => response.json())
        .then(jsonResponse => {
            userId = jsonResponse.id;
            let playlistId;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                headers: header,
                method: "post",
                body: JSON.stringify({name: name}),
            })
            .then((response) => response.json())
            .then((jsonResponse) => {
                playlistId = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                    headers: header,
                    method: "post",
                    body: JSON.stringify({uris: trackUris}),
                })
            })
        });

    }
};

export {Spotify}