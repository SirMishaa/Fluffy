<!--
  - Fluffy - https://github.com/SirMishaa/Fluffy
  - Author - SirMishaa
  - License GNU General Public License v3.0 - https://github.com/SirMishaa/Fluffy/blob/master/LICENSE
  -->

<template>
  <div class="min-h-screen md:flex">
    <Sidebar />
    <div class="flex-1 p-6">
      <div class="w-full h-full rounded"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";

export default {
  name: "Home",
  components: { Sidebar }
};
</script>
