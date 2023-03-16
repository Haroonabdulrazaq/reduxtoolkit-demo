import { render, screen } from "@testing-library/react"
import Greet from "../components/greet/greet"


describe('Greet Component Test', ()=>{

  test('renders correctly ', ()=>{
    render(<Greet />)
    const textElement = screen.getByText(/Hello/i)
    expect(textElement).toBeInTheDocument()
  })
  
  test('renders with a name', ()=>{
    render(<Greet name='Vishwas'/>)
    const textElement = screen.getByText('Hello Vishwas')
    expect(textElement).toBeInTheDocument()
  })
})