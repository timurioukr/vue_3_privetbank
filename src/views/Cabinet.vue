<script setup lang="ts">
import CreditCard from '@/components/CreditCard.vue'
import myCards from '@/data/my-cards.json'
</script>

<template>
  <div class="cards-wrapper">
    <CreditCard v-for="card in myCards" :key="card.number" :card="card" />
  </div>

  <div class="info-wrapper"></div>
</template>

<style scoped>
.cards-wrapper {
  padding: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
}
</style>
