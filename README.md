#react-hook-konami-code-listener

A script to add a global listener to keystrokes to your project.

## To Use

`import useKonamiListener from 'react-hook-konami-code-listener';`

`const [match, reset, keystrokes] = useKonamiListener();`

- `match` - Returns a boolean value. Is set to `false` until sequence is completed.
- `reset` - an optional function that can be called to reset state to `match: false`.
- `keystrokes` - An array of keys pressed in the sequence. This resets to `[]` when a key out of sequence is pressed, and also at after a full sequence is complete. When its `.length` property matches the `.length` of the sequence array, state will be set to `match: true`.

## If for some reason you need access to keystroke array

`import { sequence } from 'react-hook-konami-code-listener';`
This will give you the array: `[38,38,40,40,37,39,37,39,66,65,]`

match returns true or false boolean value, keystrokes is an array of keystrokes which will be reset to an empty array if a value outside of the sequence is pressed.

## TODO
- complete docs
- update tests
- possibly add optional callback function parameter