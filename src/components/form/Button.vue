<template>
  <component
    :is="tag"
    v-bind="$attrs"
    class="btn"
    :class="[
      getClass,
      {
        'is-full': block,
      },
    ]"
  >
    <b-loading
      v-if="spinner"
      :is-full-page="false"
      v-model="isLoading"
    ></b-loading>
    <span :class="{ 'is-invisible': spinner }"><slot></slot></span>
  </component>
</template>

<script>
export default {
  name: "Button",
  inheritAttrs: false,
  props: {
    variant: {
      type: String,
      default: "",
    },
    tag: {
      type: String,
      default: "button",
    },
    block: Boolean,
    spinner: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    getClass() {
      switch (this.variant) {
        case "main":
          return "is-main";
        case "main-outline":
          return "is-main-outline";
        case "gray":
          return "is-gray";
        case "danger":
          return "is-danger";
        default:
          return "";
      }
    },
  },
};
</script>
