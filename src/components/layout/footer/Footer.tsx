import { Link, useLocation } from 'react-router-dom';
import { PageRoutes } from '@/utils/routes.ts';
import { Flex } from '@/styles/Flex.tsx';

export const Footer = () => {

  const path = useLocation();

  return (
    <Flex $justify='center' >
      {path.pathname !== PageRoutes.ACTION ?
        <Link to={PageRoutes.ACTION} style={{ color: '#BAFF49', backgroundColor: 'transparent', border: 'none' }}>
          АКЦИИ
        </Link>
        : null}
    </Flex>
  );
};

