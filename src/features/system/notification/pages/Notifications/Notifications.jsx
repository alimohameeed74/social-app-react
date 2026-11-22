import { Button, Spinner } from "flowbite-react";
import NotificationCard from "../../components/Notification-Card/NotificationCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import NotificationCardLoader from "../../../../../shared/skeletons/notification/Notification-Card-Loader/NotificationCardLoader";
import { API_URL } from "../../../../../shared/consts/Constants";
import axios from "axios";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [readAllLoading, setReadAllLoading] = useState(false);
  const navigate = useNavigate();

  async function getNotifications() {
    setIsLoading(true);
    try {
      const result = await axios.request({
        method: "GET",
        url: `${API_URL}/notifications?unread=false&page=1&limit=30`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token_")}`,
        },
      });
      setNotifications(result.data.data.notifications);
    } catch (error) {
      setNotifications([]);
    } finally {
      setIsLoading(false);
    }
  }

  async function markAllAsRead() {
    setReadAllLoading(true);
    try {
      const result = await axios.request({
        method: "PATCH",
        url: `${API_URL}/notifications/read-all`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token_")}`,
        },
      });

      setNotifications([]);
    } catch (error) {
      //
    } finally {
      setReadAllLoading(false);
    }
  }

  useEffect(() => {
    function callApi() {
      getNotifications();
    }

    callApi();
  }, []);

  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm sm:rounded-2xl">
      <div className="border-b border-slate-200 p-4 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-xl font-black text-slate-900 sm:text-2xl">
              Notifications
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Realtime updates for likes, comments, shares, and follows.
            </p>
          </div>
          {notifications.length !== 0 ? (
            <Button
              onClick={markAllAsRead}
              disabled={readAllLoading}
              className="w-full items-center justify-center gap-2 rounded-lg border border-slate-200! bg-slate-50! px-3 py-2 text-sm font-bold text-slate-700! transition hover:bg-slate-100! disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto inline-flex"
            >
              {readAllLoading ? (
                <Spinner
                  size="sm"
                  aria-label="Info spinner example"
                  className="me-3"
                  light
                />
              ) : (
                <i className="fa-check fa-solid"></i>
              )}
              Mark all as read
            </Button>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="space-y-2 p-3 sm:p-4">
        {isLoading ? (
          <>
            {[1, 2, 3].map(() => (
              <NotificationCardLoader />
            ))}
          </>
        ) : (
          <>
            {notifications.length === 0 ? (
              <>
                <div class="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center text-sm text-slate-500 shadow-sm">
                  No notifications yet.
                </div>
              </>
            ) : (
              <>
                {notifications.map((notification) => (
                  <NotificationCard
                    key={notification._id}
                    notification={notification}
                  />
                ))}
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
}
