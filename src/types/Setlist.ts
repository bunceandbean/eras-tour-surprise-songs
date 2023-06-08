import { Track } from './Track';

export interface SetlistData {
    albumName: string;
    columnNumber: number;
    albumNumber: number;
    setList: Track[];
    colorData: string;
    headerCssStyle: {[key: string]: string};
    dataViewClassName?: string;
};
