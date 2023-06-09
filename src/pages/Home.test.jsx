import { screen, render } from '@testing-library/react'
import colors from '../theme/colors'
import Home from './Home'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

test('title should be rendered', () => {
   render(<Home />)
   const title = screen.getByText(/check your personality/i)
   expect(title).toBeInTheDocument()
   expect(title).toHaveStyle({ color: colors.pink, fontSize: 56 })
})

test('button should be rendered', () => {
   render(<Home />)
   const button = screen.getByRole('button', { name: 'get started now' })
   expect(button).toBeInTheDocument()
})

test('click button should take the user personality-test page', async () => {
   const history = createMemoryHistory()
   render(
      <Router history={history}>
         <Home />
      </Router>
   )
   const button = screen.getByRole('button', { name: 'get started now' })
   userEvent.click(button)
   const location = history.location.pathname
   expect(location).toBe('/personality-test')
})
