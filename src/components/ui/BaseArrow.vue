<template>
  <div class="all-arrow">
    <p><slot></slot></p>
    <a class="link" href="#">
      <span class="link__arrow">
        <span></span>
        <span></span>
      </span>
      <span class="link__line"></span>
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.all-arrow{
  // display: flex;
  // justify-content: center;
  position: absolute;
  bottom: 15%;
  right: 50%;
  transform: translate(50%, 50%);

  p {
    font-family: 'Cinzel', sans-serif;
    color: #4A4A4A;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    padding-bottom: 8px;
  }
}
.link {
  $self: &;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  transform: rotate(-90deg);

  &__arrow {
    display: inline-flex;

    span {
      position: relative;
      width: 14px;
      height: 2px;
      border-radius: 2px;
      overflow: hidden;
      background: #BEBDBE;
      z-index: 2;

      &:nth-child(1) {
        transform-origin: left bottom;
        transform: rotate(45deg) translate3d(8px, -10px, 0);
      }

      &:nth-child(2) {
        transform-origin: left bottom;
        transform: rotate(-45deg);
      }

      &:after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        width: 0;
        height: 2px;
      }
    }
  }
  &__line {
    position: relative;
    margin-left: -14px;
    margin-right: 30px;
    width: 40px;
    height: 2px;
    background: #BEBDBE;
    overflow: hidden;
    z-index: 1;

    &:after {
      content: "";
      display: block;
      position: absolute;
      left: 80px;
      width: 70px;
      height: 2px;
    }
  }
}
</style>
