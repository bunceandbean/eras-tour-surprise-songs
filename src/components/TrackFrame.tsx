import { SETLIST, Track, TrackProperties } from '../types/Track';
import React from "react";

export const TrackFrame = (track: Track) => {
    const getTrackProperties = () => {
        let result: TrackProperties = {
            icon: "pi pi-question",
            bgColor: 'white',
            opacity: track.venue === SETLIST ? "opacity-80" : ""
        };
        if (track.isPlayed) {
            result.icon = track.venue === SETLIST ? "pi pi-star" : "pi pi-check";
            result.bgColor = track.venue === SETLIST ? 'lightgrey' : 'lightgreen';
        }
        return result;
    };
    const {icon, bgColor, opacity} = getTrackProperties();
    return (
        <div className={`col-12 transition-all transition-ease-in-out ${opacity}`} style={{ background: bgColor }}>
            <div className="flex flex-column xl:flex-row xl:align-items-start p-1 gap-4">
                <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                    <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                        <div className="text-2xl font-bold text-900">{track.title}</div>
                        <div className="flex align-items-center gap-3">
                            <span className="flex align-items-center gap-2">
                                <i className="pi pi-map"></i>
                                <span className="font-semibold">{track.venue || "?"}</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                        <span className="text-2xl font-semibold"><i className={icon}></i></span>
                    </div>
                </div>
            </div>
        </div>
    );
};