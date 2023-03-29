import Box from '@mui/material/Box';
import { useQuestionContext } from '../../context/question'
import colors from '../../theme/colors'

const QuestionInfo = () => {
  const { questionState } = useQuestionContext()

  return (
    <Box fontSize={20} color={colors.pink} fontWeight={300}>
      {`QUESTION ${questionState.currentIndex + 1} OF ${questionState.questions.length}`}
    </Box>
  )
}

export default QuestionInfo
