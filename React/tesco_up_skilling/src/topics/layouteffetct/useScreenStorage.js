import {useState, useLayoutEffect, useEffect} from 'react';
const useScreenStorage = () => {
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)
    useLayoutEffect(() => {
        function updateSize() {
            console.log("size changed in layout effect");
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    useEffect(() => {
        function updateSize() {
            console.log("size changed in effect");
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, [])
}

export default useScreenStorage;