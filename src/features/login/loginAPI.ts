import api from "../../api/baseAPI";

const name = "test";
const email = "test@test.com";
const client_id = "ju16a6m81mhid5ue1z3v2g0uh";

export const getToken = async () => {
  const body = {
    client_id,
    name,
    email,
  };
  try {
    const res = await api.post("/register", body);
    const {
      data: { sl_token: token },
    } = res.data;
    return token;
  } catch (err) {
    console.error(err);
  }
};
