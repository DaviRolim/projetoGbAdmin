<template>
  <div class="container">
    <div class="painel">
    <div class="panel panel-warning">
  <!-- Default panel contents -->
      <div class="panel-heading">Pedidos GB</div>
      <div class="panel-body">
        <p>...</p>
      </div>

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
          <button class="btn btn-danger" @click="atualizaStatus(item, 'aguardando')">Aguardando</button>
          <button class="btn btn-info" @click="atualizaStatus(item, 'fazendo')">Fazendo</button>
          <button class="btn btn-success" @click="atualizaStatus(item, 'finalizado')">Finalizado</button>
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
export default {
  data () {
    return {
      listaPedidos: []
    }
  },
  mounted () {
    // this.$db.ref('pedidos').orderByChild('userId').equalTo(this.$user.uid).on('value', data => {
    //   const obj = data.val()
    //   this.listaHistorico = this.$_.map(obj, (pedidos, index) => {
    //     return pedidos
    //   })
    // })
    axios.get('/pedidos.json')
    .then(res => {
          console.log(res.data)
          this.listaPedidos = res.data
        })
        .catch(error => console.log(error))
  },
  methods: {
    getNomeFromEmail(nome) {
      return nome.split('@')[0]
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
      // atualizar o status
      console.log(item)
      console.log(status)
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
