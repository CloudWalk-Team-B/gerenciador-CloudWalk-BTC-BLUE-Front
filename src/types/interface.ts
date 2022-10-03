export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Product {
  id?: string;
  code: number;
  name: string;
  image: string;
  description: string;
  category: string;
  price: number;
  inventory: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface UserLogin {
  email: string;
  password: string;
}
export interface RegisterUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: string;
  isAdmin: boolean;
}

interface CreateAccountData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: number;
}
