import PropTypes from 'prop-types';
import '../../styles/alert.css';

export const Alert = ({ message }) => {
  return ( <div className="alert"><p>{ message }</p></div> )
}

Alert.propTypes = {
    message: PropTypes.string.isRequired,
}
