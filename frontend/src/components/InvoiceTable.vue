<template>
    <div class="table-container">
      <table class="invoice-table">
        <thead>
          <tr>
            <th>NOTA FISCAL</th>
            <th>SACADO</th>
            <th>CEDENTE</th>
            <th>EMISSÃO</th>
            <th>VALOR</th>
            <th>STATUS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(invoice) in invoices" :key="invoice.id" class="invoice-row">
            <td>{{ invoice.nNf || '1234' }}</td>
            <td>{{ invoice.buyer?.name || 'SACADO 001' }}</td>
            <td>{{ invoice.provider?.name || 'CEDENTE 002' }}</td>
            <td>{{ formatDate(invoice.emissionDate) || '12/02/2020' }}</td>
            <td class="value">{{ formatCurrency(invoice.value) || 'R$ 49.725,00' }}</td>
            <td class="status">{{ invoice.statusText || 'RECEBIDO' }}</td>
            <td class="actions">
              <button class="btn-provider-data">Dados do cedente</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InvoiceTable',
    props: {
      invoices: {
        type: Array,
        required: true
      }
    },
    methods: {
      formatDate(dateString) {
        if (!dateString) return '';
        
        try {
          const date = new Date(dateString);
          return date.toLocaleDateString('pt-BR');
        } catch (e) {
          return dateString;
        }
      },
      formatCurrency(value) {
        if (!value) return '';
        
        try {
          return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(parseFloat(value));
        } catch (e) {
          return `R$ ${value}`;
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .table-container {
    background-color: white;
    border-radius: 15px;
    left: 0;
  }
  
  .invoice-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 15px;
  }
  
  thead {
    background-color: transparent;
  }
  
  th {
    padding: 0 16px 8px 16px;
    text-align: left;
    font-size: 12px;
    font-weight: 700;
    color: #A1A8B8;
    letter-spacing: 0.5px;
    border: none;
  }
  
  .invoice-row {
    position: relative;
    transition: transform 0.2s ease;
  }
  
  .invoice-row:hover {
    transform: translateY(-2px);
  }
  
  .invoice-row td {
    padding: 16px;
    font-size: 14px;
    color: #4D4D4D;
    font-weight: 500;
    border: 1px solid #DFE2EB; /* Cor da borda do Figma */
    border-right: none;
    background-color: white;
  }
  
  .invoice-row td:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    border-left: 1px solid #DFE2EB;
  }
  
  .invoice-row td:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border-right: 1px solid #DFE2EB;
  }
  
  /* Remover bordas internas duplicadas */
  .invoice-row td + td {
    border-left: none;
  }
  
  .value {
    font-weight: 700 !important;
    color: #00AD8C !important;
  }
  
  .status {
    font-weight: 700 !important;
    color: #00AD8C !important;
    text-transform: uppercase;
  }
  
  .actions {
    text-align: right;
  }
  
  .btn-provider-data {
    background-color: transparent;
    border: 1px solid #CAD3FF;
    color: #727272;
    border-radius: 24px;
    padding: 8px 29px;
    font-size: 12px;
    transition: all 0.2s;
    font-weight: 500;
    line-height: 16px;
    cursor: pointer;
  }
  
  .btn-provider-data:hover {
    background-color: #CAD3FF;
    color: #4D4D4D;
  }
  </style>