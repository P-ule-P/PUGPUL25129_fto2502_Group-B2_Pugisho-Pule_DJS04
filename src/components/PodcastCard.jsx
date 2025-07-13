import React from "react";
import { formatTimeAgo } from "../utils/time";
import { mapGenreIdsToNames } from "../utils/genreUtils";

export function PodcastCard({ data, genres, onClick }) {
  const genreNames = mapGenreIdsToNames(data.genres, genres);

  return (
    <div className="card" onClick={onClick}>
      <img src={data.image} alt={data.title} className="cover" />
      <h3>{data.title}</h3>
      <p>
        {data.seasons} season{data.seasons !== 1 ? "s" : ""}
      </p>
      <div className="tags">
        {genreNames.map((name) => (
          <span key={name} className="tag">
            {name}
          </span>
        ))}
      </div>
      <p className="meta">{formatTimeAgo(data.updated)}</p>
    </div>
  );
}
