import { string } from "yup";

export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: number;
  isAdmin: boolean;
  isManager: boolean;
  isAuth: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface EditPassword {
  id?: string;
  password: string;
  confirmPassword: string;
}

export interface UpdateUser {
  id?: string;
  name: string;
  email: string;
  cpf: string;
  isAdmin: boolean;
  isManager: boolean;
  isAuth: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Category {
  id?: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Product {
  id: string;
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

export interface EditProduct {
  code: number;
  name: string;
  image: string;
  description: string;
  category: string;
  price: number;
  inventory: boolean;
}

export interface RecoveryPassword {
  email: string;
}
