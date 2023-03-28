import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { QuestionProvider } from '../context/question'
import Home from '../pages/Home'
import PersonalityTest from '../pages/PersonalityTest'

const PersonalityRoutes = () => (
   <QuestionProvider>
      <Router>
         <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/personality-test' element={<PersonalityTest />} />
            <Route element={() => <>Not Found</>} />
         </Routes>
      </Router>
   </QuestionProvider>
)

export default PersonalityRoutes
