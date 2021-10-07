<template>
  <div id="app">
    <select v-model="lang">
      <option value="en">En</option>
      <option value="vn">Vn</option>
    </select>
    <LayoutDefault />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import LayoutDefault from "@/layout/default.vue";
import { setLang, getLang } from "@/utils/locale";
import setting from "@/config/setting";

@Component({
  components: {
    LayoutDefault,
  },
  data() {
    return {};
  },
  created() {
    console.log("i18n ::: ", this.$i18n.locale);
  },
})
export default class App extends Vue {
  lang: string = getLang() || setting.locale;
  @Watch("lang")
  onChangeLang(val: string) {
    setLang(val);
    this.$router.go(0);
  }
}
</script>

<style lang="scss"></style>
