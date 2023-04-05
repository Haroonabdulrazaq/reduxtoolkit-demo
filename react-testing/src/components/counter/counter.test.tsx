import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import { act } from 'react-dom/test-utils';
import Counter from './counter';


describe('Counter', ()=>{
  test('renders correctly', ()=>{
    render(<Counter/>)
    const countElement = screen.getByRole('heading')
    expect(countElement).toBeInTheDocument()

    const incrementButton = screen.getByRole('button', {name: 'Increment'})
    expect(incrementButton).toBeInTheDocument()
  })
  
  test('renders a count of "0"', ()=>{
    render(<Counter/>)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('0')
  })

  test('renders a text of 1 after user click an increment button', async()=>{
    user.setup()
    render(<Counter/>)
    const incrementButton = screen.getByRole('button', {name: 'Increment'})
    await user.click(incrementButton)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('1')
  })

  test('renders a test of 2 after clicking the incre,ent button twice', async()=>{
    user.setup()
    render(<Counter/>)
    const incrementButton = screen.getByRole('button', {name: 'Increment'})
    const countElement = screen.getByRole('heading')

    await user.click(incrementButton)
    await user.click(incrementButton)

    expect(countElement).toHaveTextContent('2')
  })

  test('renders a count of 10 fater clicking a Set button', async()=>{
    user.setup()
    render(<Counter/>)
    const amountInput = screen.getByRole('spinbutton')
    await user.type(amountInput, '10')
    expect(amountInput).toHaveValue(10)

    const setButton = screen.getByRole('button', {name: 'Set'})
    const headerText = screen.getByRole('heading')
    await user.click(setButton)
    expect(headerText).toHaveTextContent('10')
  })

  test('renders a count of 10 faster clicking a Set button', async()=>{
    user.setup()
    render(<Counter/>)
    const incrementButton = screen.getByRole('button', {name: 'Increment'})
    const amountInput = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', {name: 'Set'})

    await user.tab()
    expect(incrementButton).toHaveFocus()
    await user.tab()
    expect(amountInput).toHaveFocus()
    await user.tab()
    expect(setButton).toHaveFocus()
  })

})


