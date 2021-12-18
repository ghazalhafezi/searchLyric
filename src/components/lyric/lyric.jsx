import React, {useState} from "react";
import { useParams } from "react-router";
import "../lyric/lyric.css";

export default function Lyric() {
    
    let { musicName, artist } = useParams();
    const [lyric, setLyric] = useState('');
  
        let myMusicName = musicName
        let myArtist = artist;
        
        fetch(`https://api.lyrics.ovh/v1/${myArtist}/${myMusicName}`)
        .then(res => res.json())
        .then(
            (result) => {
                result.lyrics ? 
            setLyric(result.lyrics) :
            setLyric(result.error);
        },
            (error) => {
                let notFound = error.error;
                setLyric(notFound);
            }
        );
        return (
            <div className = "container mt-5">
                <h3 className = 'title'>{musicName}</h3>
                <h2 className = 'artist'>{artist}</h2>
                <div className = 'lyric-text'>{lyric}</div>
            </div>
        )
}