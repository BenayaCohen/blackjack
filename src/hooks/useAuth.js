import { useContext } from "react";
import AuthContext from "../contex/AuthContex"

export default function useAuth() {
  return useContext(AuthContext);
}
