import { Box } from '@material-ui/core'
import { useQuestionContext } from '../../context/question'
import colors from '../../theme/colors'
import ProgressBar from '../common/ProgressBar'
import QuestionAction from './QuestionAction'
import QuestionInfo from './QuestionInfo'
import QuestionOptions from './QuestionOptions'
import QuestionText from './QuestionText'

const Question = () => {
  const { questionState } = useQuestionContext()

  const getProgressRatio = () => {
    const answeredQuestionsLength = questionState.questions.filter(
      (question) => question.answer
    ).length

    return Math.round((answeredQuestionsLength / questionState.questions.length) * 100)
  }

  return (
    <Box>
      <Box mb={3}>
        <ProgressBar color={colors.pink} progressRatio={getProgressRatio()} />
      </Box>
      <Box mb={3}>
        <QuestionInfo />
      </Box>
      <QuestionText />
      <Box mb={3}>
        <QuestionOptions />
      </Box>
      <QuestionAction />
    </Box>
  )
}

export default Question
