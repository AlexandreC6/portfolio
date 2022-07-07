<template>
  <div class="place">
    <a class="link" href="#">
      <span class="link__arrow">
        <span></span>
        <span></span>
      </span>
      <span class="link__line"></span>
      <span class="link__text">
        <slot></slot>
      </span>
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.place {
  height: 100%;
  position: absolute;
  bottom: 0;
}

.link {
  $self: &;
  display: inline-flex;
  align-items: center;
  padding: 5px;
  text-decoration: none;
  transform: rotate(-90deg) translate3d(-300px, 0, 0);

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
        content: '';
        display: block;
        position: absolute;
        left: 0;
        width: 0;
        height: 2px;
        background: #0F4C81;
      }
    }
  }

  &__line {
    position: relative;
    margin-left: -14px;
    margin-right: 30px;
    width: 150px;
    height: 2px;
    background: #BEBDBE;
    overflow: hidden;
    z-index: 1;

    &:after {
      content: '';
      display: block;
      position: absolute;
      left: 80px;
      width: 70px;
      height: 2px;
      background: #0F4C81;
    }
  }

  &__text {
    color: #4A4A4A;
    font-family: 'Oswald', sans-serif;
    font-size: 18px;
    text-transform: uppercase;
  }

  &:hover {
    #{$self} {
      &__line {
        &:after {
          animation: animation-line 1.5s forwards;
        }
      }

      &__arrow {
        span {
          &:after {
            animation: animation-arrow 1.5s forwards;
            animation-delay: 1s;
          }
        }
      }
    }
  }
}


@keyframes animation-line {
  0% {
    left: 80px;
  }

  100% {
    left: 0;
  }
}

@keyframes animation-arrow {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}
</style>
