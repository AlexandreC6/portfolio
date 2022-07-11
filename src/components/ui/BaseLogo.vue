<template>
<div class="line-logo"></div>
  <div class="all-logo">
    <div class="logo1">
      <Icon icon="cib:ruby" color="black" class="icon-tech" />
    </div>
    <div class="logo2">
      <Icon icon="mdi:language-ruby-on-rails" color="black" class="icon-tech" />
    </div>
    <div class="logo3">
      <Icon icon="akar-icons:vue-fill" color="black" class="icon-tech" />
    </div>
    <div class="logo4">
      <Icon icon="cib:js" color="black" class="icon-tech" />
    </div>
    <div class="logo5">
      <Icon icon="akar-icons:html-fill" color="black" class="icon-tech" />
    </div>
    <div class="logo6">
      <Icon icon="akar-icons:css-fill" color="black" class="icon-tech" />
    </div>
    <div class="logo7">
      <Icon icon="cib:mysql" color="black" class="icon-tech sql" />
    </div>
    <div class="logo8">
      <Icon icon="bi:git" color="black" class="icon-tech" />
    </div>
    <div class="logo9">
      <Icon icon="bxl:heroku" color="black" class="icon-tech" />
    </div>
    <div class="logo10">
      <Icon icon="akar-icons:bootstrap-fill" color="black" class="icon-tech" />
    </div>
  </div>
</template>

<script>
// Iconify
import { Icon } from '@iconify/vue';

export default {
  components: {
    Icon
  }
}
</script>

<style scoped lang="scss">
.line-logo {
  margin-top: 6.15vw;
  margin-left: 15vw;
  width: 612px;
  border-top: 1px solid #000;
}

.all-logo {
  width: 612px;
  height: 187px;
  margin: 2.18vw 0 0 15vw;
  display: grid;
  grid-template-columns: repeat(5, 80px);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 53px;
  grid-row-gap: 27px;
}

.logo1 {
  grid-area: 1 / 1 / 2 / 2;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  }

.logo2 {
  grid-area: 1 / 2 / 2 / 3;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  }

.logo3 {
  grid-area: 1 / 3 / 2 / 4;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  }

.logo4 {
  grid-area: 1 / 4 / 2 / 5;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  }

.logo5 {
  grid-area: 1 / 5 / 2 / 6;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  }

.logo6 {
  grid-area: 2 / 1 / 3 / 2;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  }

.logo7 {
  grid-area: 2 / 2 / 3 / 3;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  }

.logo8 {
  grid-area: 2 / 3 / 3 / 4;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  }

.logo9 {
  grid-area: 2 / 4 / 3 / 5;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  }

.logo10 {
  grid-area: 2 / 5 / 3 / 6;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  }

.icon-tech {
  height: 32px;
  width: 32px;
}
</style>
