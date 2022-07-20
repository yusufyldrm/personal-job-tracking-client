import PropTypes from 'prop-types';
import { Wrapper } from './style';

const Button = ({
  title,
  icon: Icon,
  iconProps,
  isReverse,
  isLoading,
  children,
  ...props
}) => {
  return (
    <Wrapper
      disabled={isLoading}
      $isReverse={isReverse}
      {...props}
    >
      {children ? children : <p>{title}</p>}
      {Icon && <Icon {...iconProps} style={title ? { margin: `0 ${isReverse ? '5px' : 0} 0 ${!isReverse ? '5px' : 0}` } : {}} />}
    </Wrapper>
  )
};

Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.elementType,
  iconProps: PropTypes.object,
  isReverse: PropTypes.bool,
  isLoading: PropTypes.bool,
  bg: PropTypes.string,
  radius: PropTypes.number,
  pd: PropTypes.string,
  textColor: PropTypes.string,
  children: PropTypes.node
};

Button.defaultProps = {
  title: '',
  icon: null,
  iconProps: {},
  isReverse: false,
  isLoading: false,
  bg: '#797e85',
  radius: 5,
  pd: '15px',
  textColor: '#fff',
  children: null
};

export default Button