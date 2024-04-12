import { SearchProps } from 'antd/es/input';
import Search from 'antd/es/input/Search';
import { useState } from 'react';

export const SearchGame = () => {
  const [valueSearchGame, setValueSearchGame] = useState('');
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => {

  };
  const onChangeSearchGame = (e: any) => {
    setValueSearchGame(e.target.value);
  };

  return (
    <div>
      <Search
        size='large'
        placeholder='ПоиFsdfnPSDNFPKSMDFKMSDNfск'
        enterButton
        onSearch={onSearch}
        onChange={onChangeSearchGame}
        style={{ width: 400, padding: '30px' }}
      />
    </div>
  );
};

