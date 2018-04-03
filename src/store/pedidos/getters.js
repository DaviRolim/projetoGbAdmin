import firebase from 'firebase'
import lodash from 'lodash'

export const getListaPedidos = ({ state }) => {
  return state.listaPedidos.reverse()
}
// Criar aqui os getters pra os counts