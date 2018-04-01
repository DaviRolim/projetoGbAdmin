<template>
  <div class="container">
    <div class="painel">
    <div class="panel panel-warning">
  <!-- Default panel contents -->
      <div class="panel-heading">Pedidos GB</div>
      <!-- List group -->
<table class="table table-condensed">
    <thead>
      <tr>
        <th>Data do Pedido</th>
        <th>Usuário</th>
        <th>Pedido</th>
        <th>Observação</th>
        <th>Total</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr :class="colorStatus(item)" v-for="(item, index) in listaPedidos" :key="index">
        <td>{{item.date}}</td>
        <td>{{getNomeFromEmail(item.email)}}</td>
        <td>
          <p v-for="(pedido, i) in item.itens" :key="i">{{pedido.nmProduto}}</p>
        </td>
        <td>{{item.observacao}}</td>
        <td>{{item.vlTotal}}</td>
        <td class="btn-group">
          <button class="btn btn-danger" @click="atualizaStatus(item, 'Aguardando confirmação')">Aguardando</button>
          <button class="btn btn-info" @click="atualizaStatus(item, 'Pedido em andamento')">Fazendo</button>
          <button class="btn btn-success" @click="atualizaStatus(item, 'Finalizado')">Finalizado</button>
        </td>
      </tr>
    </tbody>
  </table>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import firebase from 'firebase'
import lodash from 'lodash'
export default {
  data () {
    return {
      listaPedidos: []
    }
  },
  mounted () {
    firebase.database().ref('pedidos').orderByChild('date').on('value', data => {
      const obj = data.val()
      this.listaPedidos = lodash.map(obj, (pedido, index) => {
        pedido.id = index
        return pedido
      })
      this.listaPedidos.reverse()
      console.log(this.listaPedidos)
    })
    // axios.get('/pedidos.json')
    // .then(res => {
    //       console.log(res.data.name)
    //       this.listaPedidos = res.data
    //       this.listaPedidos.reverse()
    //     })
    //     .catch(error => console.log(error))
  },
  methods: {
    getNomeFromEmail(nome) {
      if (nome) {
        return nome.split('@')[0]
      } else {
        return ''
      }
    },
    colorStatus (item) {
      if (item.estado === 'Aguardando confirmação') {
        console.log(item.estado)
        return 'text-danger'
      } else if (item.estado === 'Pedido em andamento') {
        return 'text-info'
      } else if (item.estado === 'Finalizado') {
        return 'text-success'
      }
    },
    atualizaStatus(item, status) {
      console.log(item)
      console.log(status)
      item.estado = status
      firebase.database().ref('pedidos/' + item.id).update(item)
    }
  }
}
</script>

<style>
  .painel {
    padding: 3%;
  }
  td {
    vertical-align: middle;
    text-align: justify;
  }
</style>
