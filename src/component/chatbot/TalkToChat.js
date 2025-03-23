import { useEffect, useState } from "react";

const TawkToChat = () => {
    const [isChatVisible, setChatVisible] = useState(true);

    useEffect(() => {
        if (window.Tawk_API) return;

        const script = document.createElement("script");
        script.src = "https://embed.tawk.to/67d3988dbb11a8190f5a4db1/1im98nqks";
        script.async = true;
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");

        document.body.appendChild(script);

        script.onload = () => {
            window.Tawk_API = window.Tawk_API || {};
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    // Hàm ẩn/hiện chatbox
    const toggleChat = () => {
        if (window.Tawk_API) {
            if (isChatVisible) {
                window.Tawk_API.hideWidget();
            } else {
                window.Tawk_API.showWidget();
            }
            setChatVisible(!isChatVisible);
        }
    };

    return (
        <div>
            <button onClick={toggleChat}>
                {isChatVisible ? "Ẩn Chat" : "Hiện Chat"}
            </button>
        </div>
    );
};

export default TawkToChat;
