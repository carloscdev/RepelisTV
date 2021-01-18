<template>
  <div class="popular">
    <div class="popular__contenedor contenedor">
      <span class="sub-title">ONLINE STREAMING</span>
      <h2>Películas Populares</h2>
      <b-carousel-list
        class="popular__carousel"
        :data="results"
        :items-to-show="getOrientation"
        :icon-size="iconSize"
        :repeat="arrowBoth"
        :interval="interval"
      >
        >
        <template slot="item" slot-scope="list">
          <div
            class="popular__card"
            :style="`background-image:url('${urlImage}${list.poster_path}')`"
          >
            <router-link :to="`/movie/${list.id}`">
              <div class="popular__card--text contenedor">
                <h4 class="color-white">{{ list.title }}</h4>
                <div class="color-white">
                  <span class="buttonPlay">
                    <font-awesome-icon :icon="['fas', 'play']" />
                  </span>
                  <small>{{ list.release_date }}</small>
                </div>
              </div></router-link
            >
          </div>
        </template>
      </b-carousel-list>
    </div>
  </div>
</template>

<script>
import CONFIG from "@/utils/config";

export default {
  data() {
    return {
      results: [],
      loading: false,
      errored: false,
      urlImage: "https://image.tmdb.org/t/p/original/",
      iconSize: "is-large",
      arrowBoth: true,
      interval: 1000,
    };
  },
  computed: {
    getOrientation() {
      return window.innerWidth > 968
        ? 3.3
        : window.innerWidth > 768
        ? 2.3
        : 1.3;
    },
  },
  mounted() {
    this.axios
      .get(`${CONFIG.TMBD_URL}movie/popular?api_key=${CONFIG.TMBD_API_KEY}`)
      .then((response) => {
        this.results = response.data.results;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>
