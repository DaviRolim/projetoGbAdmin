<template>
    <div class="container">
        <div class="painel">
          <div class="panel panel-info">
            <div class="panel-heading">Cardápio</div>
                <div class="form-group">
                    <label>ID</label>
                    <input class="form-control" type="text" v-model="cardapio.id" placeholder="1">
                </div>
                <div class="form-group">
                    <label>Nome Produto</label>
                    <input class="form-control" type="text" v-model="cardapio.nmProduto" placeholder="Alagoas">
                </div>
                <div class="form-group">
                    <label>Descricao Produto</label>
                    <input class="form-control" type="text" v-model="cardapio.dsProduto" placeholder="Pao, ovo, carne, queijo, linguica, feijao">
                </div>
                <br>
                <div class="form-group">
                    <label for="sanduiche">
                    <input class="form-control" id="sanduiche" type="radio" value="sanduiche" v-model="cardapio.gpProduto">
                    Sanduiche
                    </label>
                    <label for="baguete">
                    <input class="form-control" id="baguete" type="radio" value="baguete" v-model="cardapio.gpProduto">
                    Baguete
                    </label>
                    <label for="suco">
                    <input class="form-control" id="suco" type="radio" value="suco" v-model="cardapio.gpProduto">
                    Suco
                    </label>
                    <label for="vitamina">
                    <input class="form-control" id="vitamina" type="radio" value="vitamina" v-model="cardapio.gpProduto">
                    Vitamina
                    </label>
                    <label for="salada">
                    <input class="form-control" id="salada" type="radio" value="salada" v-model="cardapio.gpProduto">
                    Salada
                    </label>
                    <label for="sugestao">
                    <input class="form-control" id="sugestao" type="radio" value="sugestao" v-model="cardapio.gpProduto">
                    Sugestao
                    </label>
                    <label for="maltado">
                    <input class="form-control" id="sugestao" type="radio" value="maltado" v-model="cardapio.gpProduto">
                    Maltados
                    </label>
                    <label for="energetico">
                    <input class="form-control" id="sugestao" type="radio" value="energetico" v-model="cardapio.gpProduto">
                    Energéticos
                    </label>

                </div>
                <div class="form-group">
                    <label>Valor do Produto</label>
                    <input class="form-control" type="text" v-model="cardapio.vlProduto" placeholder="5.20">
                </div>
                <button class="btn btn-primary" @click="submit">Salvar</button>
                <hr>
                <h3>Lista de itens no cardapio</h3>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in cardapios" :key='u.id'>{{ u.id }} -  {{ u.nmProduto }} - {{ u.dsProduto }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import lodash from 'lodash'
export default {
  data() {
    return {
        cardapio: {
            id: '',
            nmProduto: '',
            dsProduto: '',
            gpProduto: 'sanduiche',
            vlProduto: ''
          },
          cardapios: []
      };
  },
  mounted () {
    firebase.database().ref('cadastro').on('value', data => {
      const obj = data.val()
      this.cardapios = lodash.map(obj, (cadastro, index) => {
        return cadastro
      })
      this.cardapios.reverse()
    })
  },
  methods: {
      submit() {
        firebase.database().ref('cadastro').push(this.cardapio)
        this.cardapio.id = '';
        this.cardapio.nmProduto = '';
        this.cardapio.dsProduto = '';
        this.cardapio.vlProduto = '';
      }
    }
}
</script>

<style>
</style>
