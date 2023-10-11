import { useEffect, useState } from "react";

const UserCounter = () => {
  const [userCount, setUserCount] = useState(0);
  const [adminCount, setAdminCount] = useState(0);
  const [totalUserCount, setTotalUserCount] = useState(0);

  useEffect(() => {
    setTotalUserCount(adminCount + userCount);
  }, [userCount, adminCount]);

  return (
    <div>
      Kullanıcı Sayısı: {userCount}
      <button onClick={() => setUserCount(userCount + 1)}>Arttır</button>
      Admin Sayısı: {adminCount}
      <button onClick={() => setAdminCount(adminCount + 1)}>Arttır</button>
      Tüm Kullanıcıların Sayısı{totalUserCount}
    </div>
  );
};

export default UserCounter;
