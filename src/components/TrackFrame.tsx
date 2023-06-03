import { Track } from '../types/Track';

export const TrackFrame = (track: Track) => {
    return (
        <div className={`${(track.venue === "SETLIST") ? "opacity-80" : ""} col-12 transition-all transition-ease-in-out overflow-scroll`} style={{backgroundColor: track.isPlayed ? ((track.venue === "SETLIST")
         ? "lightgrey" : "lightgreen") : "white"}}>
            <div className="flex flex-column xl:flex-row xl:align-items-start p-1 gap-4">
                <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                    <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                        <div className="text-2xl font-bold text-900">{track.title}</div>
                        <div className="flex align-items-center gap-3">
                            <span className="flex align-items-center gap-2">
                                <i className="pi pi-map"></i>
                                <span className="font-semibold">{(track.venue === '') ? "?" : track.venue}</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                        <span className="text-2xl font-semibold">{track.isPlayed ? (track.venue === "SETLIST") ?<i className="pi pi-star"></i> : <i className="pi pi-check"></i> : <i className="pi pi-question"></i>}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};