import { Link, useLocation } from 'react-router-dom';

export const Footer = () => {

  const path = useLocation();

  return (
    <  >
      Здесь могла быть Ваша реклама
      {/*{path.pathname !== PageRoutes.ACTION ?*/}
      {/*  <Link to={PageRoutes.ACTION} style={{ color: '#BAFF49', backgroundColor: 'transparent', border: 'none' }}>*/}
      {/*    АКЦИИ*/}
      {/*  </Link>*/}
      {/*  : null}*/}
    </>
  );
};

