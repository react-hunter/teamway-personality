import Box from '@mui/material/Box';
import { useQuestionContext } from '../../context/question'

const QuestionText = () => {
  const { questionState } = useQuestionContext()

  return (
    <Box height={60} fontSize={20} fontWeight={700} fontStyle={'italic'}>
      {questionState.questions[questionState.currentIndex].text}
    </Box>
  )
}

export default QuestionText
