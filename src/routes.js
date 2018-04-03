import App from './App'
import Pedidos from './pages/pedidos'
import Analytics from './pages/analytics'
import Cadastro from './pages/Cadastro'

export const routes = [
  { path: '/', component: Pedidos },
  { path: '/cadastro', component: Cadastro },
  { path: '/analytics', component: Analytics }
];