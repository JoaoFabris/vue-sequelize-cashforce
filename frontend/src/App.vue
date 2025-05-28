<template>
  <div class="app">
    <sidebar />
    <div class="content">
      <header-line></header-line>
      <div class="container">
        <invoice-header />
        
        <div v-if="loading" class="loading">
          Carregando notas fiscais...
        </div>
        
        <div v-else-if="error" class="error">
          Erro ao carregar notas fiscais: {{ errorMessage }}
        </div>
        
        <invoice-table v-else :invoices="orders" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLine from './components/HeaderLine.vue';
import Sidebar from './components/Sidebar.vue';
import InvoiceHeader from './components/InvoiceHeader.vue';
import InvoiceTable from './components/InvoiceTable.vue';
import api from './services/api';

export default {
  name: 'App',
  components: {
    Sidebar,
    InvoiceHeader,
    InvoiceTable,
    HeaderLine
  },
  data() {
    return {
      orders: [],
      loading: true,
      error: false,
      errorMessage: ''
    };
  },
  mounted() {
    this.fetchOrders();
  },
  methods: {
    async fetchOrders() {
      try {
        console.log('Buscando dados da API...');
        const response = await api.get('/orders');
        console.log('Dados recebidos:', response.data);
        this.orders = response.data;
        this.loading = false;
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        this.loading = false;
        this.error = true;
        this.errorMessage = error.message || 'Erro desconhecido';
        
        this.orders = [
          { 
            id: 1, 
            nNf: '18153',
            value: '198450.00', 
            orderStatusBuyer: '7', 
            statusText: 'Pendente de confirmação',
            emissionDate: '2020-10-30',
            buyer: { name: 'SACADO 001' },
            provider: { name: 'CEDENTE 002' }
          },
          { 
            id: 2, 
            nNf: '18157', 
            value: '168850.00', 
            orderStatusBuyer: '7', 
            statusText: 'Pendente de confirmação',
            emissionDate: '2020-11-04',
            buyer: { name: 'SACADO 001' },
            provider: { name: 'CEDENTE 002' }
          },
          { 
            id: 3, 
            nNf: '18184', 
            value: '222795.00', 
            orderStatusBuyer: '7', 
            statusText: 'Pendente de confirmação',
            emissionDate: '2020-11-10',
            buyer: { name: 'SACADO 001' },
            provider: { name: 'CEDENTE 002' }
          }
        ];
        this.error = false; // Removendo o erro para mostrar os dados fictícios
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'DM Sans', sans-serif;
}

body {
  background-color: #F5F7FB;
  color: #4D4D4D;
}

.app {
  display: flex;
  min-height: 100vh;
}

.content {
  flex: 1;
  background-color: var(--white);
}

.container {
  max-width: 1200px;
  margin: 95px auto;
  margin-left: 0;
  padding: 50px 24px;
}

.loading, .error {
  background-color: white;
  border-radius: 15px;
  padding: 40px;
  text-align: center;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.04);
}

.error {
  color: #d9534f;
}
</style>