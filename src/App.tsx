import { GlobalStyle } from './styles/GlobalStyle.tsx';
import { LayoutMain } from '@/components/layout/LayoutMain.tsx';
import { Route, Routes } from 'react-router-dom';
import { PageRoutes } from '@/utils/routes.ts';
import { PageMainGame } from '@/components/game/PageMainGame.tsx';
import { Cursor } from '@/components/cursor/Cursor.tsx';
import { InfoGameCard } from '@/components/game/InfoGameCard.tsx';
import { Action } from '@/components/action/Action.tsx';
import { SideBarGenreInfo } from '@/components/layout/sideBar/SideBarGenreInfo.tsx';


function App() {

  return (
    <>
      <GlobalStyle />
      <Cursor />
      <Routes>
        <Route path={PageRoutes.LAYOUT} element={<LayoutMain />}>
          <Route index element={<PageMainGame />} />
          <Route path='/info/:id' element={<InfoGameCard />} />
          <Route path='/category/:genre' element={<SideBarGenreInfo />} />
          <Route path={PageRoutes.ACTION} element={<Action />} />
          <Route path="*" element="Error" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
