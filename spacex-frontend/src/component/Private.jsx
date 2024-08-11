import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../Axios/user";

export default function Private({ children }) {
  const navigate = useNavigate();
  const [IsAuth, setAuth] = useState(false);

  useEffect(() => {
    handle();
  }, [IsAuth]);

  async function handle() {
    try {
      const a = await getToken();
      console.log(a.data.auth);
      setAuth(a.data?.auth);
    } catch (error) {
      return navigate("/");
    }
  }
  if (IsAuth === true) {
    return children;
  }
}
