<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #FBF4EC;
  border: 1px solid #000;
  color: black;
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
  border: 1px solid #0F4C81;
  color: #0F4C81;
}

@keyframes slide-in {
  from {
    /* transform: translate(0); */
    transform: scale(1);
  }
  to {
    /* transform: translate(10px, -10px); */
    transform: scale(1.2);
  }

}
</style>
