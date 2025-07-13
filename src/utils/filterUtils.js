export function filterAndSort(podcasts, { search, genre, sort }) {
  let result = [...podcasts];

  if (search) {
    const lower = search.toLowerCase();
    result = result.filter((p) => p.title.toLowerCase().includes(lower));
  }

  if (genre !== "all") {
    result = result.filter((p) =>
      p.genres.some((g) => String(g) === String(genre))
    );
  }

  if (sort === "asc") {
    result.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "desc") {
    result.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sort === "recent" || sort === "newest") {
    result.sort((a, b) => new Date(b.updated) - new Date(a.updated));
  }

  return result;
}
