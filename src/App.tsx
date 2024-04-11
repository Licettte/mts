import { GlobalStyle } from './styles/GlobalStyle.tsx';
import { LayoutMain } from '@/components/layout/LayoutMain.tsx';
import { Route, Routes } from 'react-router-dom';
import { PageRoutes } from '@/utils/routes.ts';
import { PageMain } from '@/components/layout/PageMain.tsx';
import { Cursor } from '@/components/cursor/Cursor.tsx';
import { InfoGameCard } from '@/components/GameCard/InfoGameCard.tsx';
import React from 'react';
import { Action } from '@/components/action/Action.tsx';


function App() {
  console.log(import.meta.env.VITE_BASE_URL);
  return (
    <>
      <GlobalStyle />
      <Cursor />
      <Routes>
        <Route path={PageRoutes.LAYOUT} element={<LayoutMain />}>
          <Route index element={<PageMain />} />
          <Route path='/info/:id' element={<InfoGameCard />} />
          <Route path={PageRoutes.ACTION} element={<Action />} />

          <Route path="*" element="Error" />
        </Route>
      </Routes>
    </>
  );
}

export default App;