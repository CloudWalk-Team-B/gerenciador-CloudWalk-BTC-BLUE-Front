export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  isAdmin?:boolean;
  createdAt?: Date;
  updatedAt?: Date
}
export interface UserLogin {
  email: string;
  password: string;
}

