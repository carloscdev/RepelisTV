<template>
  <div class="header">
    <div class="header__contenedor contenedor">
      <div class="header__contenedor--texto">
        <h1>Repelis TV</h1>
        <p>Las mejores películas y series de TV Gratis</p>
        <Button variant="main">
          <font-awesome-icon style="font-size: 2rem" :icon="['fas', 'tv']" />
          Comenzar
        </Button>
      </div>
      <div class="header__contenedor--brand">
        <div class="logo">
          <a href="https://carlosc.tech" ref="noreferrer noopener"
            >CCDEV<span class="color-main">*</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/form/Button";
export default {
  components: {
    Button,
  },
};
</script>
