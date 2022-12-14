import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const useAdminOrSeller = (email) => {
  const { setLoading } = useContext(AuthContext);
  const [isAdminOrSeller, setIsAdminOrSeller] = useState("");
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://rebook-server-nine.vercel.app/users/adminOrSeller/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsAdminOrSeller(data.isAdminOrSeller);
          setIsAdminLoading(false);
        });
    }
  }, [email]);

  return [isAdminOrSeller, isAdminLoading];
};

export default useAdminOrSeller;
