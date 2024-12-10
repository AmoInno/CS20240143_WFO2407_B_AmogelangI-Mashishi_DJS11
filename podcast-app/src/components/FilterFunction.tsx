export const sortPodcasts = (
  podcasts: any[],
  option: "A-Z" | "Z-A" | "newest" | "oldest"
) => {
  const sortedPodcasts = [...podcasts];

  switch (option) {
    case "A-Z":
      sortedPodcasts.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "Z-A":
      sortedPodcasts.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "newest":
      sortedPodcasts.sort(
        (a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime()
      );
      break;
    case "oldest":
      sortedPodcasts.sort(
        (a, b) => new Date(a.updated).getTime() - new Date(b.updated).getTime()
      );
      break;
    default:
      break;
  }
  return sortedPodcasts;
};
