export interface User {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  deleted?: boolean;
  photo?: string | Upload;
}

export interface Games {
  games: Game[];
}

export interface Game {
  idG?: number;
  gameName?: string;
  developer?: string;
  publisher?: string;
  publishDate?: string;
  genre?: string;
  modes?: string;
  platforms?: string;
  description?: string;
  image?: string;
}

export interface Upload {
  id?: string;
  // type: string;
  path?: string;
  mime?: string;
  filename?: string;
  thumbnail?: string;
  created_at?: Date;
}
