import React from "react";
import { genres } from "../data/genres";

export function Filters({ search, setSearch, genre, setGenre, sort, setSort }) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search Podcasts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="filter-input"
      />

      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="filter-select"
      >
        <option value="all">All Genres</option>
        {genres.map((g) => (
          <option key={g.id} value={g.id}>
            {g.title}
          </option>
        ))}
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="filter-select"
      >
        <option value="recent">Recently Updated</option>
        <option value="title-asc">Title (A-Z)</option>
        <option value="title-desc">Title (Z-A)</option>
      </select>
    </div>
  );
}
