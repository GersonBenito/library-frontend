import { ButtonStyled } from "../../styles/button"
import PropTypes from 'prop-types';


export const Button = ({ text, submit = false, styled = 'primary', event, typeEvent = 'onClick' }) => {
  return (
      typeEvent === 'onClick' ? (
        <ButtonStyled 
            type={ submit ? 'submit' : 'button' } 
            styled={ styled }
            onClick={ event }
        >
            { text }
        </ButtonStyled>
      ):(
        <ButtonStyled 
            type={ submit ? 'submit' : 'button' } 
            styled={ styled }
            onChange={ event }
        >
            { text }
        </ButtonStyled>
    )
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    event: PropTypes.func,
    typeEvent: PropTypes.string
}
