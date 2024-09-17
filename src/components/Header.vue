<script setup>
import { ref } from 'vue';
import Login from './Login.vue';

const showLoginPopup = ref(false);
const isMobileMenuActive = ref(false);

function toggleMobileMenu() {
  isMobileMenuActive.value = !isMobileMenuActive.value;
}
</script>

<template>
  <header class="header">
    <div class="logo-section">
      <img src="../assets/logo.svg" alt="logo" class="logo">
      <span class="search-icon">🔍</span>
      <nav class="navigation" :class="{ 'is-active': isMobileMenuActive }">
        <ul>
          <li><a href="/wallet">Гаманець</a></li>
          <li>
            <a href="/services">Сервіси</a>
            <span class="dropdown-arrow">▼</span>
          </li>
          <li><a href="/archive">Архів</a></li>
          <button @click="showLoginPopup = true" class="login-button login-button-mobile">Вхід</button>
          <button v-if="$route.name === 'cabinet'" @click="$router.push('/')"
            class="login-button login-button-mobile">Вихід</button>

        </ul>
      </nav>
    </div>

    <div class="header-info">
      <span class="currency">$ 41.05 / 41.49</span>
      <span class="calendar-icon">📅</span>
      <span class="checklist-icon">✔️</span>
      <button v-if="$route.name === 'cabinet'" @click="$router.push('/')" class="login-button">Вихід</button>
      <button v-else @click="showLoginPopup = true" class="login-button">Вхід</button>
    </div>

    <button class="mobile-menu-button" @click="toggleMobileMenu">
      ☰
    </button>
    <Login v-if="showLoginPopup" @closeLogin="showLoginPopup = false" />
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border-bottom: 1px solid #444;
}

.logo-section {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
}

.search-icon {
  font-size: 24px;
  margin-left: 10px;
  cursor: pointer;
}

.navigation ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navigation ul li {
  margin-left: 20px;
  display: flex;
  align-items: center;
}

.navigation ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
}

.navigation ul li a:hover {
  text-decoration: underline;
}

.dropdown-arrow {
  font-size: 12px;
  margin-left: 5px;
}

.header-info {
  display: flex;
  align-items: center;
}

.currency {
  margin-right: 20px;
  font-size: 16px;
  display: flex;
  align-items: center;

  &:after {
    content: '';
    width: 1px;
    height: 35px;
    background: #444;
    display: block;
    margin-left: 15px;
  }
}

.calendar-icon,
.checklist-icon {
  font-size: 24px;
  margin-right: 20px;
  cursor: pointer;
}

.login-button {
  padding: 8px 16px;
  border: 2px solid #4caf50;
  background-color: transparent;
  color: #4caf50;
  border-radius: 8px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #4caf50;
  color: #fff;
}

.mobile-menu-button {
  cursor: pointer;
  display: none;
  background: none;
  border: none;
  font-size: 28px;
  color: #fff;
}

.login-button-mobile {
  display: none;
}

@media (max-width: 768px) {
  .navigation {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
  }

  .navigation ul {
    display: none;
  }

  .navigation.is-active ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .navigation ul li {
    margin-left: 0;
  }

  .navigation.is-active {
    display: flex;
    background: #444;
    padding: 15px;
    border-bottom: 1px solid #333;
  }

  .mobile-menu-button {
    display: block;
  }
}

@media (max-width: 500px) {
  .header-info {
    display: none;
  }

  .navigation.is-active .login-button-mobile {
    display: block;
  }
}
</style>
