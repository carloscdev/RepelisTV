<template>
  <div class="searchMovie">
    <div class="searchMovie__contenedor contenedor">
      <div class="searchMovie__contenedor--text">
        <h2 class="color-white">
          Resultados de:
          {{ $route.params.id }}
        </h2>
      </div>
      <div class="searchMovie__contenedor--brand">
        <div class="logo">
          <a href="https://carlosc.tech" ref="noreferrer noopener"
            >CCDEV<span class="color-main">*</span></a
          >
        </div>
      </div>
    </div>
    <ListMovie :results="results" />
  </div>
</template>

<script>
import CONFIG from "@/utils/config";
import ListMovie from "@/components/ListMovie";
export default {
  components: {
    ListMovie,
  },
  async created() {
    await this.axios
      .get(
        `${CONFIG.TMBD_URL}search/movie/?api_key=${CONFIG.TMBD_API_KEY}&query=${this.$route.params.id}&page=1`
      )
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

<style lang="scss">
.searchMovie {
  background-color: black;
}
</style>
