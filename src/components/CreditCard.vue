<script setup>
import { computed } from 'vue'

const props = defineProps({
  card: {
    type: Object,
    default: {
      type: 'PrivitBank',
      name: 'Petia Petushok',
      number: 'XXXXXXXXXXXXXXXX',
      cvv: 'XXX',
      expiry: 'XX/XX',
    },
  },
})

const formattedNumber = computed(() => {
  let number = props.card.number
  if (props.card.type === 'American Express') {
    return number.replace(/(\d{4})(\d{6})(\d{5})/, '$1 $2 $3')
  } else {
    return number.replace(/(\d{4})(?=\d)/g, '$& ')
  }
})

function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function generateRandomGradient() {
  const color1 = getRandomColor()
  const color2 = getRandomColor()
  return `linear-gradient(135deg, ${color1}, ${color2})`
}

const randomGradient = computed(() => generateRandomGradient())
</script>

<template>
  <div class="credit-card" :style="{ background: randomGradient }" :data-cvv="props.card.cvv">
    <div class="card-type">{{ props.card.type }}</div>
    <div class="chip"></div>
    <div class="card-number">{{ formattedNumber }}</div>
    <div class="card-name">{{ props.card.name }}</div>
    <div class="card-expiry">Дійсна до {{ props.card.expiry }}</div>
  </div>
</template>

<style scoped>
.credit-card {
  width: 400px;
  height: 250px;
  border-radius: 15px;
  color: #fff;
  padding: 20px;
  box-sizing: border-box;
  font-family: 'Helvetica Neue', sans-serif;
  position: relative;
  overflow: hidden;
}

.card-type {
  font-size: 18px;
  text-align: right;
  text-transform: uppercase;
}

.chip {
  width: 50px;
  height: 35px;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin-top: 20px;
}

.card-number {
  font-size: 20px;
  letter-spacing: 2px;
  margin-top: 30px;
}

.card-name {
  font-size: 18px;
  text-transform: uppercase;
  margin-top: 20px;
}

.card-expiry {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 13px;
}

.credit-card:hover.credit-card::before {
  top: 0;
  right: 0;
  cursor: pointer;
  content: attr(data-cvv);
  height: 100%;
  width: 100%;
  position: absolute;
  background: #333;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
</style>
