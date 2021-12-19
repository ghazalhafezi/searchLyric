import "../music/music.css";
import { Link, Outlet } from "react-router-dom";
import { PropTypes } from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";
Music.propTypes = {
  list: propTypes.array,
};
export default function Music(props) {
  return (
    <div className="list-item">
      {props.list.map((item) => (
        <div className="card" key={item.id}>
          <img
            src={item.album.cover_big}
            className="card-img-top"
            alt={item.artist.name}
          />
          <div className="card-body">
            <h5 className="card-title">{item.artist.name}</h5>
            <p className="card-text">{item.title_short}</p>
            <Link
              to={`/Lyric/${item.title_short}/${item.artist.name}`}
              className="btn btn-info"
            >
              Go To Lyric
            </Link>
          </div>
          <Outlet />
        </div>
      ))}
    </div>
  );
}
Music.propTypes = {
  list: PropTypes.array,
};
