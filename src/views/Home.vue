<!--
  - Fluffy - https://github.com/SirMishaa/Fluffy
  - Author - SirMishaa
  - License GNU General Public License v3.0 - https://github.com/SirMishaa/Fluffy/blob/master/LICENSE
  -->

<template>
  <div class="min-h-screen md:flex">
    <Sidebar :nav-data="this.$store.state.sideBarData" />
    <div class="flex-1 p-6">
      <ViewError />
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import ViewError from "./ViewError";

export default {
  name: "Home",
  components: { ViewError, Sidebar }
};
</script>
