import { useNavigate } from 'react-router';

export const Action = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div style={{ color: 'white' }}>
      скидоны какие-то
      <button style={{ width: '100%' }} onClick={goBack}>Назад</button>
    </div>
  );
};
