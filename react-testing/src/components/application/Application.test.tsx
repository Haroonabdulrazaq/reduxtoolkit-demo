import { render, screen } from "@testing-library/react";
import Application from "./Application";


describe('Application Test', ()=>{
  test('Renders correctly',()=>{
    render(<Application/>);

    const pageHeading = screen.getByRole('heading', {
      level: 1 
    })
    expect(pageHeading).toBeInTheDocument()
    const sectionHeading = screen.getByRole('heading', { 
      level: 2
    })
    expect(sectionHeading).toBeInTheDocument()

    let nameElement =  screen.getByRole("textbox", {
      name: 'Name'
    })
    expect(nameElement).toBeInTheDocument()

    const nameElement2 = screen.getByLabelText('Name', {
      selector: 'input'
    })
    expect(nameElement2).toBeInTheDocument()

    let bioElement = screen.getByRole("textbox", {
      name: 'Bio'
    })
    expect(bioElement).toBeInTheDocument()

    let jobLocationElement = screen.getByRole("combobox")
    expect(jobLocationElement).toBeInTheDocument()
    
    let checkBoxElement = screen.getByRole("checkbox")
    expect(checkBoxElement).toBeInTheDocument()

    const checkBoxElement2 = screen.getByLabelText("I agree to the terms and conditions")
    expect(checkBoxElement2).toBeInTheDocument()

    let buttonElement = screen.getByRole("button")
    expect(buttonElement).toBeInTheDocument()
  })
})