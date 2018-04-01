
<template>
  <div class="container">
    <div class="small">
      <bar-chart :chart-data="datacollection" :options="options"></bar-chart>
    </div>
  </div>
</template>

<script>
  import BarChart from '../components/BarChart.js'
  import lodash from 'lodash'
  import firebase from 'firebase'

  export default {
    components: {
      BarChart
    },
    data () {
      return {
        listaPedidos: [],
        countSanduiche: 0,
        countBaguete: 0,
        countSuco: 0,
        countVitamina: 0,
        countSalada: 0,
        countSugestao: 0,
        countMaltado: 0,
        countEnergetico: 0,
        datacollection: null,
        options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 1,
            }
          }],
          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
        }
      }
    },
    mounted () {
      this.refreshData()
      firebase.database().ref('pedidos').orderByChild('date').on('value', data => {
      const obj = data.val()
      this.listaPedidos = lodash.map(obj, (pedido, index) => {
        pedido.id = index
        pedido.itens.forEach(element => {
          if(element.gpProduto === 'sanduiche') {
            this.countSanduiche += +1
          } else if (element.gpProduto === 'baguete') {
            this.countBaguete += +1
          } else if (element.gpProduto === 'sugestao') {
            this.countSugestao += +1
          } else if (element.gpProduto === 'suco') {
            this.countSuco += +1
          } else if (element.gpProduto === 'vitamina') {
            this.countVitamina += +1
          } else if (element.gpProduto === 'maltado') {
            this.countMaltado += +1
          } else if (element.gpProduto === 'salada') {
            this.countSalada += +1
          } else if (element.gpProduto === 'energetico') {
            this.countEnergetico += +1
          }
        });
        return pedido
      })
      this.listaPedidos.reverse()
    })
    this.fillData()
  },
  watch: {
    listaPedidos () {
      this.fillData()
    }
  },
    methods: {
      fillData () {
        this.datacollection = {
        labels: ['Sanduiches', 'Baguetes', 'Sucos', 'Vitaminas', 'Saladas', 'Sugestões', 'Maltados', 'Energéticos'],
        datasets: [
          {
            label: 'Total pedido por grupo de alimento',
            backgroundColor: ['lightblue','dark-grey', 'brown', 'orange', 'green', 'red', 'pink', 'purple'],
            data: [this.countSanduiche, this.countBaguete, this.countSuco,
            this.countVitamina, this.countSalada, this.countSugestao,
            this.countMaltado, this.countEnergetico]
          }
        ]
      }
      },
      refreshData () {
        this.countSanduiche = 0
        this.countBaguete = 0
        this.countSuco = 0
        this.countVitamina = 0
        this.countSalada = 0
        this.countSugestao = 0
        this.countMaltado = 0
        this.countEnergetico = 0
      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>