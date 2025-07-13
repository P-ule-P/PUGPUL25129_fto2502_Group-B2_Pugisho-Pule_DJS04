import React, { useEffect, useState, useMemo } from "react";
import { PodcastCard } from "./components/PodcastCard";
import { Modal } from "./components/Modal";
import { genres } from "./data/genres";
import { filterAndSort } from "./utils/filterUtils";
import "../App.css";

export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState(null);

  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("all");
  const [sort, setSort] = useState("recent");

  const [page, setPage] = useState(1);
  const perPage = 12;

  useEffect(() => {
    async function fetchAll() {
      try {
        const baseRes = await fetch("https://podcast-api.netlify.app/");
        const baseData = await baseRes.json();

        const enriched = await Promise.all(
          baseData.map((podcast) =>
            fetch(`https://podcast-api.netlify.app/id/${podcast.id}`)
              .then((res) => res.json())
              .then((full) => ({
                ...podcast,
                description: full.description || "",
                genres: full.genres || podcast.genres || [],
                seasonDetails: full.seasons || [],
              }))
              .catch(() => ({
                ...podcast,
                description: "",
                genres: podcast.genres || [],
                seasonDetails: [],
              }))
          )
        );

        setPodcasts(enriched);
      } catch (err) {
        console.error("Fetch failed", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchAll();
  }, []);

  const filtered = useMemo(() => {
    return filterAndSort(podcasts, { search, genre, sort });
  }, [podcasts, search, genre, sort]);

  const paginated = useMemo(() => {
    const start = (page - 1) * perPage;
    return filtered.slice(start, start + perPage);
  }, [filtered, page]);

  const totalPages = Math.ceil(filtered.length / perPage);

  if (loading) return <div className="state">Loading podcasts...</div>;
  if (error) return <div className="state error">Failed to load podcasts.</div>;
  if (!podcasts.length) return <div className="state">No podcasts found.</div>;

  return (
    <main className="app">
      <header className="app-header">
        <div className="logo-title">
          <div className="logo-title">
            <img
              src="./assets/logo.png"
              alt="Podcast Logo"
              className="logo-icon"
            />
          </div>
          <h1>PodcastApp</h1>
        </div>
        <div className="header-controls">
          <input
            className="search-podcasts"
            type="text"
            placeholder="Search Podcasts..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
          <img src="/assets/user.png" alt="User" className="icon user-icon" />
        </div>
      </header>

      <div className="filters">
        <label htmlFor="genreFilter" className="filter-label">
          Filter by:
        </label>
        <select
          id="genreFilter"
          className="filter-select"
          value={genre}
          onChange={(e) => {
            setGenre(e.target.value);
            setPage(1);
          }}
        >
          <option value="all">All Genres</option>
          {genres.map((g) => (
            <option key={g.id} value={g.id}>
              {g.title}
            </option>
          ))}
        </select>

        <select
          id="sortFilter"
          className="filter-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="recent">Recently Updated</option>
          <option value="asc">Title A-Z</option>
          <option value="desc">Title Z-A</option>
        </select>
      </div>

      <div className="grid">
        {paginated.map((podcast) => (
          <PodcastCard
            key={podcast.id}
            data={podcast}
            genres={genres}
            onClick={() => setSelected(podcast)}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={page === i + 1 ? "active" : ""}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      {selected && (
        <Modal podcast={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  );
}
