import Box from '@mui/material/Box';
import shadows from '@material-ui/core/styles/shadows'
import { useEffect } from 'react'
import styled from 'styled-components'

import Title from '../components/common/Title'
import {
   questionActionEnums,
   testStatus,
   useQuestionContext,
} from '../context/question'
import { getQuestionList } from '../service/question'
import Question from '../components/question/Question'
import Result from '../components/question/Result'

const StyledQuestionContainer = styled(Box)`
   max-width: 720px;
   padding: 48px 32px;
   box-shadow: ${shadows[1]};
   border: 1px solid white;
   border-radius: 5px;
`

const PersonalityTest = () => {
   const { questionState, dispatchQuestion } = useQuestionContext()
   console.log('questionState:', questionState)

   useEffect(() => {
      const loadQuestionList = async () => {
         let data = await getQuestionList()
         data = data.map((question, index) => {
            return { ...question, index }
         })

         dispatchQuestion({
            type: questionActionEnums.START_TEST,
            questions: data,
         })
      }
      loadQuestionList()
   }, [dispatchQuestion])

   return (
      <Box display={'flex'} justifyContent={'center'} pt={'5%'} pb={6}>
         {questionState.questions.length === 0 ? (
            <>Loading...</>
         ) : questionState.testStatus === testStatus.COMPLETED ? (
            <Result />
         ) : (
            <Box>
               <Box mb={4}>
                  <Title>Are you an introvert or an extrovert?</Title>
               </Box>
               <StyledQuestionContainer>
                  <Question />
               </StyledQuestionContainer>
            </Box>
         )}
      </Box>
   )
}

export default PersonalityTest
