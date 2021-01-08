<template>
  <div class="home">
    <Header />
    <Popular />
    <Ultimos />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import Popular from "@/components/Popular";
import Ultimos from "@/components/Ultimos";
export default {
  name: "Home",
  components: {
    Header,
    Popular,
    Ultimos,
  },
};
</script>
<style lang="scss"></style>
