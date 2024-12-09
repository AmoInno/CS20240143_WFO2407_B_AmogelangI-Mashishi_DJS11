export interface Podcast {
  id: string;
  title: string;
  description: string;
  seasons: number;
  image: string;
  genres: number[];
  updated: string;
}

export interface Show {
  id: string;
  title: string;
  image: string;
}

export interface GenreData {
  id: string;
  title: string;
  shows: Show[];
}

export interface GenreListProps {
  genres: Record<number, string>;
}

export interface PodcastCardProps {
  podcasts: Podcast[];
}
