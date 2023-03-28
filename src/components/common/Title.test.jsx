import { screen, render } from '@testing-library/react'
import colors from '../../theme/colors'
import Title from './Title'

test('title should be rendered', () => {
   render(<Title>test title</Title>)
   const title = screen.getByText(/test title/i)
   expect(title).toBeInTheDocument()
   expect(title).toHaveStyle({ color: colors.pink, fontSize: 56 })
})
