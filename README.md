#react-komani-hooks

A script to add a global listener to keystrokes to your project.

#TODO
make this better


`import { useKonamiListener } from 'react-hook-konami-code-listener';`

`const [match, keystrokes] = useKonamiListener();`

match returns true or false boolean value, keystrokes is an array of keystrokes which will be reset to an empty array if a value outside of the sequence is pressed.