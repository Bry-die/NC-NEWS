import { navigate } from "@reach/router";

export const errorHandling = err => {
  console.log(err);
  navigate("/error", { state: "banana" });
};
