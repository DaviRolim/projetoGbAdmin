import firebase from 'firebase'
import lodash from 'lodash'

export const loadState = ({ commit }) => {
  firebase.database().ref('pedidos').orderByChild('date').on('value', data => {
    const obj = data.val()
    var lista = []
    lista = lodash.map(obj, (pedido, index) => {
      pedido.id = index
      return pedido
    })
    commit('LOAD_STATE', lista)
  })
}