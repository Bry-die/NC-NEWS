import { navigate } from "@reach/router";

export const errorHandling = err => {
  navigate("/error", { state: "banana" });
};
