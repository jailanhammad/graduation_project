import React, { useEffect, useRef } from 'react';

const MusicPlayer = ({ musicSrc }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio(musicSrc);
        audioRef.current.loop = true;
        audioRef.current.volume = 0.4;

        const handleToggle = () => {
            const audio = audioRef.current;
            if (audio.paused) {
                audio.play().then(() => {
                    window.dispatchEvent(new CustomEvent('music-status', { detail: true }));
                }).catch(err => console.log("Playback blocked"));
            } else {
                audio.pause();
                window.dispatchEvent(new CustomEvent('music-status', { detail: false }));
            }
        };

        window.addEventListener('toggle-music', handleToggle);
        return () => window.removeEventListener('toggle-music', handleToggle);
    }, [musicSrc]);

    return null;
};

export default MusicPlayer;