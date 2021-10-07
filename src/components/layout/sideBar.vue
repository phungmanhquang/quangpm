<template>
  <div class="sideBar border-2">
    <div class="grid grid-cols-1">
      <div class="col-span-1">
        <div class="w-40 h-40 mx-auto">
          <img src="@/assets/logo.gif" alt="" />
        </div>
      </div>
      <!-- list menu -->
      <div class="menu col-span-1">
        <div class="menu-item">
          <icon icon="columns" />
          <span>{{ $t("menu.dashboard") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue } from "vue-property-decorator";

// @Component({})
export default class SideBar extends Vue {}
</script>

<style></style>
