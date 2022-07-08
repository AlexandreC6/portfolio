<template>
  <div class="all-logo">
    <div class="logo1">
    </div>
    <div class="logo2">

    </div>
    <div class="logo3">

    </div>
    <div class="logo4">

    </div>
    <div class="logo5">

    </div>
    <div class="logo6">
      <i class="fa-brands fa-css3-alt icon"></i>
    </div>
    <div class="logo7">

    </div>
    <div class="logo8">

    </div>
    <div class="logo9">

    </div>
    <div class="logo10">

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.all-logo {
  width: 612px;
  height: 187px;
  margin: 127px 238px;
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

.icon {
 font-size: 36px;
}
</style>
