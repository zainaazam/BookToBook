export interface User {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  deleted?: boolean;
  photo?: string | Upload;
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
