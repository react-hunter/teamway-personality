import Box from '@mui/material/Box';
import colors from '../../theme/colors'

const Title = (props) => (
   <Box sx={{color: colors.pink, fontSize: '56px'}} color={colors.pink} fontSize={56}>
      {props.children}
   </Box>
)

export default Title
