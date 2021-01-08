<template>
  <div class="navbar">
    <nav class="contenedor">
      <div class="brand">
        <router-link to="/"
          ><img src="../assets/images/logo.png" alt="Repelis TV"
        /></router-link>
      </div>
      <div class="menu">
        <ul>
          <li>
            <router-link to="/">Inicio</router-link>
          </li>
          <li>
            <router-link to="/about">Películas</router-link>
          </li>
          <li>
            <router-link to="/about">Series</router-link>
          </li>
        </ul>
      </div>
      <div
        class="search"
        style="cursor: pointer;"
        @click="isCardModalActive = true"
      >
        <font-awesome-icon :icon="['fas', 'search']" />
      </div>
    </nav>
    <b-modal v-model="isCardModalActive" :width="500" scroll="keep">
      <div class="">
        <div class="py-5">
          <h3 class="color-white mb-5">
            ¿Qué quieres ver hoy?
          </h3>
          <b-field>
            <b-input
              placeholder="Buscar por nombre..."
              type="search"
              icon-pack="fas"
              icon="search"
              size="is-large"
              class="inputSearch"
            ></b-input>
            <p class="control buttonSearch">
              <b-button
                style="  width: 100%;"
                class="button is-main "
                size="is-large"
                ><font-awesome-icon :icon="['fas', 'search']"
              /></b-button>
            </p>
          </b-field>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCardModalActive: false,
    };
  },
};
</script>
<style lang="scss">
.inputSearch {
  width: 85%;
}
.buttonSearch {
  width: 15%;
}
.modal-content > div {
  width: 80%;
  margin: 0 auto;
}
</style>
