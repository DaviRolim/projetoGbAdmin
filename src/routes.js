import App from './App'
import Pedidos from './pages/pedidos'
import Analytics from './pages/analytics'

export const routes = [
  { path: '/', component: Pedidos },
  { path: '/analytics', component: Analytics }
];