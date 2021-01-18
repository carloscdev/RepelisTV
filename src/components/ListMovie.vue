<template>
  <div class="listMovie">
    <div class="listMovie__contenedor contenedor">
      <div
        class="listMovie__contenedor--item"
        v-for="result in results"
        :key="result.id"
      >
        <div>
          <router-link :to="`/movie/${result.id}`">
            <img :src="`${urlImage}/${result.poster_path}`" alt="Image" />
          </router-link>
        </div>
        <div>
          <router-link :to="`/movie/${result.id}`">
            <h4 class="title is-size-8">{{ result.original_title }}</h4>
          </router-link>
          <br />
          <p class="subtitle is-size-8">{{ result.overview }}</p>
          <small>{{ result.release_date }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListMovie",
  props: {
    results: { type: Array },
  },
  data() {
    return {
      urlImage: "https://image.tmdb.org/t/p/original",
    };
  },
};
</script>

<style lang="scss">
.listMovie {
  padding: 5rem 0;
  &__contenedor {
    &--item {
      display: grid;
      grid-template-columns: 0.5fr 1fr;
      grid-column-gap: 3rem;
      margin-bottom: 3rem;
      border: 1px solid rgb(231, 231, 231);
      border-radius: 20px;
      overflow: hidden;
      max-height: 400px;
      @media (max-width: 1080px) {
        max-height: 350px;
      }
      @media (max-width: 930px) {
        max-height: 320px;
      }
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        max-height: 900px;
        img {
          max-height: 350px;
        }
      }
      img {
        object-fit: cover;
        min-width: 100%;
      }
      div:last-child {
        padding: 2rem 2rem 0;
      }
    }
  }
}
</style>
