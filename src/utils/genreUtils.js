export function mapGenreIdsToNames(genreIds, allGenres) {
  return genreIds
    .filter((idOrTitle) => idOrTitle !== "All")
    .map((idOrTitle) => {
      if (typeof idOrTitle === "number") {
        const match = allGenres.find((g) => g.id === idOrTitle);
        return match?.title || "Unknown";
      } else if (typeof idOrTitle === "string") {
        const match = allGenres.find(
          (g) => g.title.toLowerCase() === idOrTitle.toLowerCase()
        );
        return match?.title || idOrTitle;
      }
      return "Unknown";
    })
    .filter(Boolean);
}
