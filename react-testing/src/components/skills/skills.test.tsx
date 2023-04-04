import {render, screen, logRoles} from '@testing-library/react' 
import Skills from './skills'

describe('Skills', ()=>{
  const skills = ["HTML","CSS","JavaScript"]

  test('Renders Correctly',()=>{
    render(<Skills skills={skills}/>)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  test('Renders list of skills', ()=>{
    render(<Skills skills={skills}/>)
    const listItemElements = screen.getAllByRole('listitem')
    expect(listItemElements).toHaveLength(skills.length)
  })

  test('renders Login button', ()=>{
    render(<Skills skills={skills}/>)
    const loginButton = screen.getByRole('button', {
      name: 'Login'
    })
    expect(loginButton).toBeInTheDocument()
  })

  // TO check if an element doesnt exist in the UI but has been removed from the DOM, we use queryByRole
  test('Start Learning button is not rendered', ()=>{
    render(<Skills skills={skills}/>)
    const startLearningButton = screen.queryByRole('button', {name: 'Start Learning'})
    expect(startLearningButton).not.toBeInTheDocument()
  })

    // To check if an element doesnt exist in the UI, until a server call we use findByRole
    test('Start learning button is eventually displayed',async()=>{
     const view =  render(<Skills skills={skills} />)
    //  logRoles(view.container) // To print out all aria roles within the DOM tree
      // screen.debug() // For debugging Test, It will print/log all DOM node
      const startLearningButton = await screen.findByRole('button', {name: 'Start Learning'},{timeout: 2000})  // findByRole has a timeout of 1000 millisecs,
      expect(startLearningButton).toBeInTheDocument()                                         // but we have an option to modify that by adding the second parameter
      // screen.debug()
    })
})