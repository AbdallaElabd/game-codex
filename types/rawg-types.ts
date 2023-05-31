type Platform = {
  platform: {
    id: number;
    name: string;
    slug: string;
    image: string | null;
    year_end: number | null;
    year_start: number | null;
    games_count: number;
    image_background: string;
  };
  released_at: string;
  requirements: {
    minimum: string;
    recommended: string;
  } | null;
};

type Genre = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

type Store = {
  id: number;
  name: string;
  slug: string;
  domain: string;
  games_count: number;
  image_background: string;
};

type Rating = {
  id: number;
  count: number;
  title: string;
  percent: number;
};

type Tag = {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
};

type ESRBRating = {
  id: number;
  name: string;
  slug: string;
};

export type Game = {
  id: string;
  slug: string;
  name: string;
  background_image: string;
  rating: number;
  ratings: Rating[];
  ratings_count: number;
  rating_top: number;
  tba: boolean;
  released: string;
  added: number;
  added_by_status: {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
  };
  suggestions_count: number;
  updated: string;
  reviews_count: number;
  dominant_color: string;
  platforms: Platform[];
  genres: Genre[];
  stores: {
    id: number;
    store: Store;
  }[];
  tags: Tag[];
  esrb_rating: ESRBRating | null;
  short_screenshots: {
    id: number;
    image: string;
  }[];
};
