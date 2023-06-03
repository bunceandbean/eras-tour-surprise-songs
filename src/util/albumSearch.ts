import { Track } from "../types/Track";

export const albumSearch = (tracks: Track[], title: string) => {
    return tracks.find(track => track.title === title);
}