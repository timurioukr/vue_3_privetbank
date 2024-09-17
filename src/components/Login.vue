<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const emit = defineEmits(['closeLogin'])

const router = useRouter()

const username = ref('')
const password = ref('')
const error = ref(false)
const errorMessage = ref('Неправильний логін або пароль')

function login() {
  if (username.value === 'admin' && password.value === 'admin') {
    router.push('/cabinet')
    emit('closeLogin')
  } else {
    error.value = true
    setTimeout(() => {
      error.value = false
    }, 3000)
  }
}
</script>

<template>
  <div class="popup-overlay">
    <div class="popup">
      <h2>Авторизація</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Логін</label>
          <input v-model="username" type="text" id="username" placeholder="Введіть логін" required />
        </div>
        <div class="form-group">
          <label for="password">Пароль</label>
          <input v-model="password" type="password" id="password" placeholder="Введіть пароль" required />
        </div>
        <button type="submit" class="login-button">Увійти</button>
        <p v-if="error" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
}

.popup {
  background-color: #333;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

h2 {
  margin-top: 0;
  font-size: 24px;
}

.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  padding: 10px;
  margin-top: 5px;
  background-color: #444;
  border: 1px solid #555;
  border-radius: 5px;
  color: #fff;
}

input::placeholder {
  color: #bbb;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
}

.login-button:hover {
  background-color: #45a049;
}

.error {
  color: #f44336;
  margin-top: 10px;
  text-align: center;
}
</style>
