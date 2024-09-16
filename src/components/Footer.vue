<template>
  <footer class="footer">
    <div class="footer-content">
      <img src="../assets/logo.svg" alt="logo" height="40" width="auto">
    </div>
  </footer>
</template>

<script setup>
// Нет необходимости в скрипте, если нет логики
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  border-top: 1px solid #444;
}

.footer-content {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.footer p {
  margin: 0;
}

.footer-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.footer-nav ul li {
  margin-left: 20px;
}

.footer-nav ul li:first-child {
  margin-left: 0;
}

.footer-nav ul li a {
  color: #fff;
  text-decoration: none;
}

.footer-nav ul li a:hover {
  text-decoration: underline;
}

/* Адаптивность */
@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .footer-nav ul {
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }

  .footer-nav ul li {
    margin: 10px 0;
  }
}
</style>
