import { Box, Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import Title from '../common/Title'
import { useQuestionContext } from '../../context/question'

const Result = () => {
  const { questionState } = useQuestionContext()
  const navigate = useNavigate()

  const getTestResult = () => {
    let introvert = 0
    let extrovert = 0

    questionState.questions.forEach((question) => {
      const { introvertPoint, extrovertPoint } = question.options.find(
        (option) => option.value === question.answer
      )

      introvert += introvertPoint
      extrovert += extrovertPoint
    })

    return introvert > extrovert ? 'INTROVERT' : 'EXTROVERT'
  }

  const goHome = () => navigate('/')

  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Box>
        <Title>Your Personality</Title>
        <Box fontSize={24} textAlign={'center'} py={3}>
          {getTestResult()}
        </Box>
        <Box display={'flex'} justifyContent={'center'}>
          <Button variant={'text'} color={'secondary'} onClick={goHome}>
            go home!
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Result
