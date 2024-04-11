import { Link, useLocation } from 'react-router-dom';
import { PageRoutes } from '@/utils/routes.ts';
import { useNavigate } from 'react-router';

export const Footer = () => {

  const path = useLocation();

  return (
    <div>
      {path.pathname !== PageRoutes.ACTION ?
        <Link to={PageRoutes.ACTION} style={{ color: '#BAFF49', backgroundColor: 'transparent', border: 'none' }}>
          АКЦИИ
        </Link>
        : null}


    </div>
  );
};

