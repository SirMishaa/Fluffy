<!--
  - Fluffy - https://github.com/SirMishaa/Fluffy
  - Author - SirMishaa
  - License GNU General Public License v3.0 - https://github.com/SirMishaa/Fluffy/blob/master/LICENSE
  -->

<template>
  <div
    class="flex-none w-full md:max-w-xs shadow-xl bg-white relative border-t-4 border-red-600"
  >
    <nav class="p-8 flex flex-col">
      <div class="inline-flex items-center justify-center">
        <img alt="Logo Fluffy" class="h-20 mr-4" src="@/assets/min-logo.png" />
        <h1 class="text-5xl fluffy-title leading-none text-red-600 mt-8">
          Fluffy
        </h1>
      </div>
      <div class="mt-8 mb-6 text-center">
        <hr class="mb-1" />
        <small class="text-sm text-gray-500"
          >Version 0.0.1 - License GPL-3.0</small
        >
      </div>
      <div class="mb-4">
        <!-- -->
        <div :key="section.subtitle" class="mb-6" v-for="section in navData">
          <small class="text-gray-600">{{ section.subtitle }}</small>
          <ul class="mt-1">
            <li
              :class="link.active && 'active-section'"
              :key="link.linkText"
              class="my-3"
              v-for="link in section.childs"
            >
              <i :class="`${link.logo} mr-4 w-4`"></i
              ><a :href="link.redirectTo" class="">{{ link.linkText }}</a>
            </li>
          </ul>
        </div>
        <!-- -->
      </div>
    </nav>
    <a
      class="absolute bottom-0 left-0 bg-red-600 p-2 text-white text-sm w-full text-center"
      href="#"
      target="_tab"
    >
      M'offrir un café
    </a>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  props: {
    navData: Array
  }
};
</script>

<style lang="scss">
.active-section {
  background: #e53e3e;
  border-radius: 0.25rem;
  padding: 0.5rem;
  color: #fff;
}
</style>
