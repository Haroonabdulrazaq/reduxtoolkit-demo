import { render, screen } from "@testing-library/react";
import Application from "./Application";


describe('Application Test', ()=>{
  test('Renders correctly',()=>{
    render(<Application/>);
    let textBoxElement =  screen.getByRole("namebox")
    expect(textBoxElement).toBeInTheDocument()

    let jobLocationElement = screen.getByRole("combobox")
    expect(jobLocationElement).toBeInTheDocument()

    let textAreaElement = screen.getByRole("textbox")
    expect(textAreaElement).toBeInTheDocument()
    
    let checkBoxElement = screen.getByRole("checkbox")
    expect(checkBoxElement).toBeInTheDocument()

    let buttonElement = screen.getByRole("button")
    expect(buttonElement).toBeInTheDocument()
  })
})