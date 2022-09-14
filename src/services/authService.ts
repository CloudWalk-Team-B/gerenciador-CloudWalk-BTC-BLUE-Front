import Api from "./api";
import swal from "sweetalert";
import { UserLogin } from "../types/interface";

export const loginService = {
  Login: async (values: UserLogin) => {
    try {
      const res = await Api.post("/login", values);
      return res;
    } catch (error: any) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 6000,
      });
    }
  },
};
