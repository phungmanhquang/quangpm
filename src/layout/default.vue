<template>
  <div class="layout-default">
    <div class="container mx-auto">
      <div class="grid grid-cols-12">
        <div class="col-span-3 hidden md:block">
          <side-bar />
        </div>
        <div class="bg-green-200 col-span-12 md:col-span-9">content</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import sideBar from "@/components/layout/sideBar.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { sideBar },
})
export default class LayoutDefault extends Vue {}
</script>

<style lang="scss" scoped></style>
