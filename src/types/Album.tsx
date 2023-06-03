import { Track } from './Track';

export interface Album {
    title: string
    trackList: Track[]
}

export const constructAlbum = (title: string, trackList: Track[]) => {
    return {title: title, trackList: trackList} as Album;
}