export const SETLIST = 'SETLIST';

export interface Track {
    title?: string,
    venue?: string,
    isPlayed?: boolean
};

export interface TrackProperties {
    icon: string;
    bgColor: string;
    opacity: string;
}