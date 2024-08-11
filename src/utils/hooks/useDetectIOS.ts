import { useEffect, useState } from "react";

const useDetectIOS = (): boolean => {
    const [isIOS, setIsIOS] = useState(false);
    useEffect(() => {
        const userAgent = window.navigator.userAgent;
        const detectedIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
        if (detectedIOS) {
            setIsIOS(true);
        }
    }, []);
    return isIOS;
};

export default useDetectIOS;