<template>
  <figure class="card">
    <img :src="image" alt="picture of project">
    <figcaption>
      <h3>{{title}}</h3>
      <p>{{description}}</p>
      <div class="btns">
        <base-button><a :href="github" target="_blank">Github</a></base-button>
        <base-button><a :href="link" target="_blank">Link</a></base-button>
      </div>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: ['title', 'image', "link", "description", "github"]
}
</script>

<style scoped>
.card {
  width: 400px;
  height: 400px;
  border-radius: 5px;

  display: grid;
  grid-template-rows: minmax(100%, 1fr);
  grid-template-areas: "stack";

  overflow: hidden;
}

.card > img,
.card > figcaption {
  grid-area: stack;
}

.card > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card > figcaption {
  grid-area: stack;
  /* background-color: #0F4C81; */
  background:  rgb(161, 161, 161);
  transform: translateY(calc(100% - 4rem));
  transition: transform .6s;
}

.card > figcaption > h3 {
  display: block;
  text-align: center;
  color: white;
  height: 4rem;
  opacity: 0.5;
  padding-top: 1rem;

}

.card > figcaption > p {
  color: white;
  padding: 0 30px;
  font-size: 1rem;

}

.card:hover figcaption {
  transform: none;
}

.card:hover figcaption > h3 {
  opacity: 1;
}

.btns {
  text-align: center;
  padding-top: 30px ;
}

.btns a {
  text-decoration: none;
  color: black;
}

@media screen and (max-width: 1280px) {
  .card {
    width: 300px;
    height: 300px;

  }
}
</style>
