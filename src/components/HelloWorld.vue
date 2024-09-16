<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="container">
    <div class="sidebar">
      <!-- Меню слева -->
      <div class="menu-item">Кредити</div>
      <div class="menu-item">Карти</div>
      <div class="menu-item">Цінні папери</div>
      <div class="menu-item">Автоплатежі</div>
      <div class="menu-item">Транспорт</div>
      <div class="menu-item">Страхування</div>
      <div class="menu-item">Авто</div>
      <div class="menu-item">Послуги</div>
      <div class="menu-item">Розваги</div>
      <div class="menu-item">Маркет</div>
      <div class="menu-item">Добро</div>
      <div class="menu-item">Привіт</div>
    </div>

    <div class="main-content">
      <!-- Основные блоки справа -->
      <div class="block">
        <h3>Digital картки від ПривітБанку</h3>
        <p>Кредитний ліміт до 200 000 грн. Випуск і платежі без комісії.</p>
        <button>Переглянути картки</button>
      </div>
      
      <div class="block">
        <h3>Картка іншого банку України та світу</h3>
        <p>Швидко оплачуйте своїми банківськими картками</p>
        <button>Додати картку</button>
      </div>
      
      <div class="block">
        <h3>Переказ на картку</h3>
        <p>0000 0000 0000 0000</p>
        <p>VISA/MasterCard українських та закордонних банків</p>
      </div>

      <div class="block">
        <h3>Поповнення мобільного</h3>
        <p>+380 000000000</p>
      </div>

      <div class="block">
        <h3>Платіж</h3>
        <p>UAXXXXXXXXXXXXXXX</p>
        <p>IBAN, ЄДРПОУ, номер р/рахунку або назва одержувача</p>
      </div>

      <div class="block">
        <h3>Що нового у Привіт</h3>
        <ul>
          <li>Коментарі до переказів</li>
          <li>Автоматичний розподіл коштів</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  min-height: 100vh;
  background-color: #2a2a2a;
  color: #fff;
  border-radius: 12px;
}

.sidebar {
  width: 200px;
  background-color: #333;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.menu-item {
  padding: 10px;
  margin-bottom: 10px;
  background-color: #444;
  border-radius: 8px;
  color: #fff;
  text-align: center;
  cursor: pointer;
}

.menu-item:hover {
  background-color: #555;
}

.main-content {
  flex-grow: 1;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

.block {
  background-color: #444;
  padding: 20px;
  border-radius: 8px;
}

h3 {
  margin: 0 0 10px 0;
}

button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

@media (max-width: 730px) {
  .sidebar {
    display: none;
  }
}

@media (max-width: 500px) {
  .main-content {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
