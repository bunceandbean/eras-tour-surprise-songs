import { SetlistData } from "../types/Setlist";
import { Albums } from "../data/setlist";

export const albumSort = (setlist: {[key in Albums]: SetlistData}) => {
    return Object.entries(setlist).sort((a,b) => a[1].albumNumber - b[1].albumNumber)
}