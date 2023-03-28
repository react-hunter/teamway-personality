import { screen, render } from '@testing-library/react'
import ProgressBar from './ProgressBar'

test('progress bar should be rendered', () => {
   render(<ProgressBar progressRatio={40} />)

   const progressRatioText = screen.getByText('40%')
   expect(progressRatioText).toBeInTheDocument()
})
