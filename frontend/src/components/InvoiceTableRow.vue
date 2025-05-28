<template>
  <tr>
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
</template>

<script>
export default {
  name: 'InvoiceTableRow',
  props: {
    invoice: {
      type: Object,
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
td {
  padding: 16px;
  font-size: 14px;
  color: var(--text-color);
  border-bottom: 1px solid var(--border-color);
}

.value {
  font-weight: 700;
  color: var(--primary-color);
}

.status {
  font-weight: 700;
  color: var(--primary-color);
  text-transform: uppercase;
}

.actions {
  text-align: right;
}

.btn-provider-data {
  background-color: transparent;
  border: 1px solid #CAD3FF;
  color: var(--light-text);
  border-radius: 24px;
  padding: 8px 29px;
  font-size: 12px;
  transition: all 0.2s;
}

.btn-provider-data:hover {
  background-color: #CAD3FF;
  color: var(--text-color);
}
</style>