<template>
<div class="line-logo"></div>
  <div class="all-logo">
    <div class="logo1">
      <Icon icon="akar-icons:react-fill" color="black" class="icon-tech" />
    </div>
    <div class="logo2">
      <Icon icon="akar-icons:vue-fill" color="black" class="icon-tech" />
    </div>
    <div class="logo3">
      <Icon icon="cib:js" color="black" class="icon-tech" />
    </div>
    <div class="logo4">
      <Icon icon="cib:typescript" color="black" class="icon-tech" />
    </div>
    <div class="logo5">
      <Icon icon="mdi:language-ruby-on-rails" color="black" class="icon-tech" />
    </div>
    <div class="logo6">
      <Icon icon="akar-icons:html-fill" color="black" class="icon-tech" />
    </div>
    <div class="logo7">
      <Icon icon="akar-icons:css-fill" color="black" class="icon-tech" />
    </div>
    <div class="logo8">
      <Icon icon="bi:git" color="black" class="icon-tech" />
    </div>
    <div class="logo9">
      <Icon icon="cib:mysql" color="black" class="icon-tech sql" />

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
  // width: 612px;
  width: 40.42vw;
  border-top: 1px solid #000;
}

.all-logo {
  width: 40.42vw;
  height: 12.35vw;
  margin: 2.18vw 0 0 15vw;
  display: grid;
  grid-template-columns: repeat(5, 5.28vw);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 53px;
  grid-row-gap: 27px;
}

.logo1,
.logo2,
.logo3,
.logo4,
.logo5,
.logo6,
.logo7,
.logo8,
.logo9,
.logo10 {
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo1 {
  grid-area: 1 / 1 / 2 / 2;
  }

.logo2 {
  grid-area: 1 / 2 / 2 / 3;
  }

.logo3 {
  grid-area: 1 / 3 / 2 / 4;
  }

.logo4 {
  grid-area: 1 / 4 / 2 / 5;
  }

.logo5 {
  grid-area: 1 / 5 / 2 / 6;
  }

.logo6 {
  grid-area: 2 / 1 / 3 / 2;
  }

.logo7 {
  grid-area: 2 / 2 / 3 / 3;
  }

.logo8 {
  grid-area: 2 / 3 / 3 / 4;
  }

.logo9 {
  grid-area: 2 / 4 / 3 / 5;
  }

.logo10 {
  grid-area: 2 / 5 / 3 / 6;
  }

.icon-tech {
//   height: 2.11vw;
//   width: 2.11vw;
  height: 50%;
  width: auto;
}

@media screen and (max-width: 600px and 750px) {
  .logo1,
  .logo2,
  .logo3,
  .logo4,
  .logo5,
  .logo6,
  .logo7,
  .logo8,
  .logo9,
  .logo10 {
    border: none;
  }

  .all-logo {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 10px;
    width: 68.45vw;
    height: 50vh;
    margin-top: 1rem;
  }

  .icon-tech {
    height: 100%;
  }

  .line-logo {
    width: 68.45vw;
  }

  .logo1 { grid-area: 1 / 1 / 2 / 2; }
  .logo2 { grid-area: 1 / 2 / 2 / 3; }
  .logo3 { grid-area: 2 / 1 / 3 / 2; }
  .logo4 { grid-area: 2 / 2 / 3 / 3; }
  .logo5 { grid-area: 3 / 1 / 4 / 2; }
  .logo6 { grid-area: 3 / 2 / 4 / 3; }
  .logo7 { grid-area: 4 / 1 / 5 / 2; }
  .logo8 { grid-area: 4 / 2 / 5 / 3; }
  .logo9 { grid-area: 5 / 1 / 6 / 2; }
  .logo10 { grid-area: 5 / 2 / 6 / 3; }
}
</style>
