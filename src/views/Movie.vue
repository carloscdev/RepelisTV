<template>
  <div class="movie">
    <div
      v-if="result !== {}"
      class="movie__background"
      :style="`background-image:url('${urlImage}/${result.backdrop_path}')`"
    >
      <div class="movie__background--text contenedor">
        <h1 class="text-center color-white">{{ result.title }}</h1>
        <div class="text-center">
          <Button
            variant="main"
            class="text-center"
            @click.native="isActive = true"
          >
            <font-awesome-icon style="font-size: 2rem" :icon="['fas', 'tv']" />
            Ver Video
          </Button>
        </div>
      </div>
    </div>
    <b-modal v-model="isActive" :width="640" scroll="keep">
      <div class="card">
        <div class="card-image">
          <iframe
            v-if="(video.site = 'YouTube')"
            width="100%"
            height="300"
            :src="`https://www.youtube.com/embed/${video.key}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            v-else
            :src="`https://player.vimeo.com/video/${video.key}`"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="`${urlImage}/${result.poster_path}`" alt="Image" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-8">{{ result.original_title }}</p>
              <p class="subtitle is-8">
                <span v-if="result.tagline !== ''"
                  >{{ result.tagline }} <br
                /></span>
                {{ result.overview }}
              </p>
            </div>
          </div>
          <div class="content pt-5">
            <small>Idioma: {{ result.original_language }}</small>
            <br />
            <small>{{ result.release_date }}</small>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
/* import PercentageCircle from "vue-css-percentage-circle"; */
import CONFIG from "@/utils/config";
import Button from "@/components/form/Button";
export default {
  components: {
    /* PercentageCircle, */
    Button,
  },
  data() {
    return {
      result: {},
      video: [],
      tipo: "",
      loading: false,
      errored: false,
      urlImage: "https://image.tmdb.org/t/p/original",
      isActive: false,
    };
  },
  async created() {
    await this.axios
      .get(
        `${CONFIG.TMBD_URL}movie/${this.$route.params.id}?api_key=${CONFIG.TMBD_API_KEY}`
      )
      .then((response) => {
        this.result = response.data;
        console.log(this.result);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
    await this.axios
      .get(
        `${CONFIG.TMBD_URL}movie/${this.$route.params.id}/videos?api_key=${CONFIG.TMBD_API_KEY}`
      )
      .then((response) => {
        this.video = response.data.results[0];
        /* this.tipo =  */
        console.log(response.data.results[0]);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>
