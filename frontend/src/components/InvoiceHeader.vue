<template>
  <div class="invoice-header">
    
    <div class="title-container">
        <div class="icon-wrapper">
        <i class="mdi mdi-handshake-outline"></i>
      </div>
      
      <h1>Notas fiscais</h1>
    </div>
    <p>Visualize as notas fiscais que você tem.</p>
  </div>
</template>
<script>
export default {
  name: "InvoiceHeader",
};
</script>

<style scoped>
.invoice-header {
  margin-bottom: 24px;
  margin-top: -10px;
}   

.icon i {
  font-size: 35px;
  padding-right: 5px;
}

.icon-wrapper {
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-wrapper i {
  color: #000000;
  font-size: 28px;
  transform: rotate(45deg) !important;
  background-color: transparent;
}

.title-container {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.header-icon {
  font-size: 28px;
  margin-right: 12px;
  transform: rotate(180deg);
}

h1 {
  font-size: 24px;
  color: #021b51;
  font-weight: 700;
  line-height: 28px;
}

.title-with-line {
  position: relative;
  padding-top: 16px; /* Espaço para a linha acima */
}

p {
  font-size: 14px;
  color: #727272;
  line-height: 20px;
  font-weight: 400;
}
</style>
