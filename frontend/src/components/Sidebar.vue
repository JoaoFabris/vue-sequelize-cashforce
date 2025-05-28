<template>
  <div class="sidebar">
    <div class="logo-container">
      <div class="logo">
        <img src="@/assets/sider-logo.png" alt="Cashforce Logo" />
      </div>
    </div>

    <div class="menu">
      <div class="menu-item active">
        <div class="icon-wrapper">
        <i class="mdi mdi-handshake-outline"></i>
      </div>
        <span>Notas fiscais</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
};
</script>

<style scoped>
.sidebar {
  width: 288px;
  height: 100vh;
  background-color: #f8f8f8;
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
}

.icon-wrapper {
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-wrapper i {
  color: #00AD8C;
  font-size: 28px;
  transform: rotate(45deg) !important;
  background-color: transparent;
}

.logo-container {
  padding: 15px;
}

.logo img {
  max-width: 350px;
  display: block;
}

.menu {
  padding: 10px 0;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 12px 24px;
  color: var(--primary-color);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

.menu-item.active {
  border-left: 4px solid var(--primary-color);
}

.icon {
  margin-right: 12px;
}
</style>
