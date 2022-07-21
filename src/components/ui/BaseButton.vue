<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button{
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #FBF4EC;
  border: 1px solid #000;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}
a:hover,
a:active,
button:hover,
button:active {
  animation: slide-in 1s ease-out;
  border: 1px solid #0F4C81 !important;
  color: #0F4C81 !important;
}

@keyframes slide-in {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }

}
</style>
