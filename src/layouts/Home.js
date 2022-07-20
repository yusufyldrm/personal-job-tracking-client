import {
  Header,
  Footer
} from 'components';
import React from 'react';
import { HomeWrapper, HomeSection } from './style';

const headerRef = React.createRef();
const HomeLayout = ({
  children
}) => {
  const [headerHeight, setHeaderHeight] = React.useState(50);
  React.useEffect(() => {
    setHeaderHeight(headerRef.current?.clientHeight);
    // eslint-disable-next-line
  }, [headerRef.current]);
  return (
    <HomeWrapper>
      <Header ref={headerRef} />
      <HomeSection $headerHeight={headerHeight + 20}>
        {children}
      </HomeSection>
      <Footer />
    </HomeWrapper>
  )
};

export default HomeLayout;
