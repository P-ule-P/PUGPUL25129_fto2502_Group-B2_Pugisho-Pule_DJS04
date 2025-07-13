import React from "react";
import { genres } from "../data/genres";

export function Modal({ podcast, onClose }) {
  const genreNames = (podcast.genres || [])
    .filter((genre) => genre !== "All")
    .map((genre) => {
      if (typeof genre === "number") {
        const match = genres.find((g) => g.id === genre);
        return match?.title || "Unknown";
      }
      if (typeof genre === "string") {
        const match = genres.find(
          (g) => g.title.toLowerCase() === genre.toLowerCase()
        );
        return match?.title || genre;
      }
      return "Unknown";
    })
    .filter(Boolean);

  return (
    <div id="podcastModal" className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" id="closeModal" onClick={onClose}>
          &times;
        </button>
        <h2 id="modalTitle">{podcast.title}</h2>

        <div className="modal-header">
          <img
            id="modalImage"
            src={podcast.image}
            alt="Large Cover"
            className="modal-image"
          />
          <div className="modal-info">
            <section className="modal-section">
              <h3>Description</h3>
              <p id="modalDescription" className="modal-description">
                {podcast.description}
              </p>
            </section>

            <section className="modal-section">
              <h3>Genres</h3>
              <div className="genres" id="modalGenres">
                {genreNames.map((g, i) => (
                  <span className="tag" key={i}>
                    {g}
                  </span>
                ))}
              </div>
            </section>

            <p className="updated-date" id="modalUpdated">
              🗓️ Last updated:{" "}
              {new Date(podcast.updated).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        <section className="modal-section">
          <h3>Seasons</h3>
          <div id="modalSeasons">
            {podcast.seasons &&
              Number(podcast.seasons) > 0 &&
              [...Array(Number(podcast.seasons))].map((_, i) => (
                <div key={i} className="season-row">
                  <strong>Season {i + 1}</strong>
                  <span className="episode-count">
                    {Math.floor(Math.random() * 11) + 6} episodes
                  </span>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
