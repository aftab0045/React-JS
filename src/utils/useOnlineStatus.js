import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setonlineStatus] = useState(navigator.onLine);

    useEffect(() => {
        const goOffline = () => setonlineStatus(false);
        const goOnline = () => setonlineStatus(true);

        window.addEventListener("offline", goOffline);
        window.addEventListener("online", goOnline);

        return () => {
            window.removeEventListener("offline", goOffline);
            window.removeEventListener("online", goOnline);
        };
    }, []);

    return onlineStatus;
};

export default useOnlineStatus;
