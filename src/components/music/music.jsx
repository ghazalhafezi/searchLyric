import react from "react";
import { Card } from 'react-bootstrap';
import {
    Link, Outlet
  } from 'react-router-dom'

export default function Music(props){

    const listItem = props.list.map((item,index) => 
    (
        <Card className = "m-2 col-4 col-md-2" key = {index}>
                <img src = {item.album.cover_big} className="card-img-top" alt = {item.artist.name} />
                <div className="card-body">
                    <h5 className="card-title">{item.artist.name}</h5>
                    <p className="card-text">{item.title_short}</p>
                    <Link to = {`/Lyric/${item.title_short}/${item.artist.name}`} className="btn btn-info">Go To Lyric</Link>
                </div>
            
        </Card>
    ))

    return (
        <div className = 'd-flex flex-wrap justify-content-center'>{listItem}</div>
    )
}