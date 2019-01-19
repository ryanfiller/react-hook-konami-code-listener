import React from 'react'
import {
    render,
    fireEvent,
    cleanup,
  } from 'react-testing-library'
import useKonamiListener from './useKonamiListener';

const Listener = () => {

    const [match, keystrokes] = useKonamiListener();
  
    return (
      <div data-testid="listener">
        {keystrokes.join()}
        {match === true ? 'true' : null}
      </div>
    )
}

afterEach(cleanup)

test('Listener', () => {
    
    const { debug, getByTestId } = render(<Listener/>)

    const component = getByTestId('listener');

    expect(component.textContent).toBe('');

    // presses key NOT in sequence
    fireEvent.keyDown(document.body, {
        key: 'S',
        keyCode: 83,
        which: 83,
    })
    expect(component.textContent).toBe('')

    // presses key YES in sequence
    fireEvent.keyDown(document.body, {
        key: 'ArrowUp',
        keyCode: 38,
        which: 38,
    })
    expect(component.textContent).toBe('38')

    debug();
})

// test('loads and returns null', () => {
//     const { getByTestId } = render(<Listener/>)
//     expect(getByTestId('listener').textContent).toBe('')
// })

// test('presses key NOT in sequence', () => {
//     const { getByTestId } = render(<Listener/>)
//     fireEvent.keyDown(getByTestId('listener'), {
//         keyCode: 83 // S
//     })
//     expect(getByTestId('listener').textContent).toBe('')
// })

// test('STARTS sequence', () => {
//     const { getByTestId } = render(<Listener/>)
//     fireEvent.keyDown(getByTestId('listener'), {
//         keyCode: 38 //ArrowUp
//     })
//     expect(getByTestId('listener').textContent).toContain('38')
// })