

import Home from '../pages/home/page';
import Projetos from '../pages/projetos/page';
import Sobre from '../pages/sobre/page';
import CienciaNaPraca from '../pages/projetos/ciencia-na-praca/page';
import WaiWaiTapota from '../pages/projetos/wai-wai-tapota/page';
import WaiLingo from '../pages/projetos/wailingo/page';
import CumaTrack from '../pages/projetos/cumatrack/page';
import NotFound from '../pages/NotFound';
import Contato from '../pages/contato/page';
import type { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/projetos',
    element: <Projetos />
  },
  {
    path: '/projetos/ciencia-na-praca',
    element: <CienciaNaPraca />
  },
  {
    path: '/projetos/wai-wai-tapota',
    element: <WaiWaiTapota />
  },
  {
    path: '/projetos/wailingo',
    element: <WaiLingo />
  },
  {
    path: '/projetos/cumatrack',
    element: <CumaTrack />
  },
  {
    path: '/sobre',
    element: <Sobre />
  },
  {
    path: '/contato',
    element: <Contato />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
