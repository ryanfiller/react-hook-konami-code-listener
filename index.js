import { useEffect, useState } from 'react';

export const sequence = [
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

const useKonamiListener = () => {

    const [keystrokes, setKeystrokes] = useState([]);
    const [index, setIndex] = useState(0);
    const [match, setMatch] = useState('false')

    useEffect(() => {
        const handleKeydown = (e) => {

            if (e.keyCode === sequence[index]) {
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

    if (index === sequence.length) {
        setKeystrokes([]);
        setIndex(0);
        setMatch('true');
    }

    return [match, keystrokes];
};

export default useKonamiListener;