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

test('loads and returns null', async () => {
    const { getByTestId } = render(<Listener/>)
    expect(getByTestId('listener').textContent).toBe('')
})

// test('presses key NOT in sequence', async () => {
//     const { getByTestId } = render(<Listener/>)
//     fireEvent.keyDown(getByTestId('listener'), {
//         keyCode: 83 // S
//     })
//     expect(getByTestId('listener').textContent).toBe('')
// })

// test('STARTS sequence', async () => {
//     const { getByTestId } = render(<Listener/>)
//     fireEvent.keyDown(getByTestId('listener'), {
//         keyCode: 38 //ArrowUp
//     })
//     expect(getByTestId('listener').textContent).toContain('38')
// })