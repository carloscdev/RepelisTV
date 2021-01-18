<template>
  <div class="ultimos is-black">
    <div class="ultimos__contenedor contenedor text-center">
      <span class="sub-title">YOU WILL LOVE THIS</span>
      <h2>Top 20 Películas</h2>
      <div class="ultimos__movies">
        <div v-for="r in results" :key="r.id">
          <div
            class="ultimos__movies--image"
            :style="`background-image:url('${urlImage}${r.poster_path}')`"
          >
            <div class="hd">
              <span class="numbers uno ">1080</span>
              <span class="numbers dos ">HD</span>
            </div>
            <PercentageCircle
              :percent="r.vote_average * 10"
              active-color="blue"
              complete-color="green"
              style="font-size: 5rem"
              class="rate"
            />
          </div>
          <router-link :to="`/movie/${r.id}`">
            <div class="ultimos__movies--text">
              <div class="color-white">
                <small
                  ><font-awesome-icon class="mr-2" :icon="['fas', 'eye']" />{{
                    r.popularity
                  }}</small
                >
              </div>
              <h4 class="color-white">{{ r.title }}</h4>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PercentageCircle from "vue-css-percentage-circle";
import CONFIG from "@/utils/config";
export default {
  components: {
    PercentageCircle,
  },
  data() {
    return {
      results: [],
      loading: false,
      errored: false,
      urlImage: "https://image.tmdb.org/t/p/original/",
    };
  },
  mounted() {
    this.axios
      .get(`${CONFIG.TMBD_URL}movie/top_rated/?api_key=${CONFIG.TMBD_API_KEY}`)
      .then((response) => {
        this.results = response.data.results;
        console.log(this.results);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>
