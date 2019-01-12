import { useEffect, useState } from 'react';

const useKonamiListener = () => {

    const [keystrokes, setKeystrokes] = useState([]);
    const [index, setIndex] = useState(0);
    const [match, setMatch] = useState(false)

    const konamiCode = [
        38, // up
        38, // up
        40, // down
        40, // down
        37, // left
        39, // right
        37, //left
        39, // right
        66, // b
        65, // a
    ]

    useEffect(() => {
        const handleKeydown = (e) => {

            if (e.keyCode === konamiCode[index]) {
                setKeystrokes([...keystrokes, e.keyCode]);
                setIndex(index + 1);
            } else {
                setKeystrokes([]);
                setIndex(0);
            }
        }

        window.addEventListener('keydown', handleKeydown);

        return () => {
          window.removeEventListener('keydown', handleKeydown);
        };
      });

    if (index === konamiCode.length) {
        setKeystrokes([]);
        setIndex(0);
        setMatch(true);
    }

    return match;
};

export default useKonamiListener;