import { useEffect, useState } from "react";
import { getNotifications } from "../api/notifications";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getNotifications();
      setNotifications(res.data);
    } catch (error) {
      console.log("Error fetching notifications", error);
    }
  };

  return (
    <div>
      <h2>Notifications</h2>

      {notifications.length === 0 ? (
        <p>No notifications found</p>
      ) : (
        notifications.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.title}</h3>
            <p>{item.message}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default NotificationsPage;