import axios from ".";
export async function loginApi({ email, password }) {
  console.log("sdas", email, password);
  return axios.post("/api/login/auth", {
    email,
    password,
  });
}
export async function signupApi({ name, email, password }) {
  console.log("sdas", name, email, password);
  return axios.post("/api/register/auth", {
    email,
    password,
  });
}
