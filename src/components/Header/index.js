import React from 'react';
import {
  Wrapper,
  LogoText,
} from './style';

const Header = React.forwardRef((props, ref) => {
  return (
    <Wrapper
      ref={ref}
      {...props}>
      <LogoText>LOGO</LogoText>
    </Wrapper>
  )
});

export default Header;
