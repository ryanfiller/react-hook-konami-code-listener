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

test('presses key NOT in sequence', async () => {
    const { getByTestId } = render(<Listener/>)
    fireEvent.keyDown(getByTestId('listener'), {
        keyCode: 83 // S
    })
    expect(getByTestId('listener').textContent).toBe('')
})

test('STARTS sequence', async () => {
    const { getByTestId } = render(<Listener/>)
    fireEvent.keyDown(getByTestId('listener'), {
        keyCode: 38 //ArrowUp
    })
    expect(getByTestId('listener').textContent).toContain('38')
})

// const Toggle = () => {
//   const {
//     on,
//     reset,
//     toggle,
//     set,
//   } = useToggle()
//   return (
//     <div>
//       <span data-testid="on-value">{String(on)}</span>
//       <button onClick={toggle}>toggle</button>
//       <button onClick={reset}>reset</button>
//       <button onClick={() => set(true)}>setTrue</button>
//     </div>
//   )
// }

// test('useToggle', () => {
//   const { container, getByTestId, getByText } = render(<Toggle />)
//   expect(container).toMatchSnapshot()
//   expect(getByTestId('on-value').textContent).toBe('false')
//   fireEvent.click(getByText('toggle'))
//   expect(getByTestId('on-value').textContent).toBe('true')
//   fireEvent.click(getByText('toggle'))
//   expect(getByTestId('on-value').textContent).toBe('false')
//   fireEvent.click(getByText('setTrue'))
//   expect(getByTestId('on-value').textContent).toBe('true')
//   fireEvent.click(getByText('reset'))
//   expect(getByTestId('on-value').textContent).toBe('false')
// })