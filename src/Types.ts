export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  deleted?: boolean;
  photo?: Upload;
}

export interface Upload {
  id: string;
  type: string;
  filename: string;
  thumbnail: string;
  created_at: Date;
}
