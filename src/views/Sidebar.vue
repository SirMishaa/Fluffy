<!--
  - Fluffy - https://github.com/SirMishaa/Fluffy
  - Author - SirMishaa
  - License GNU General Public License v3.0 - https://github.com/SirMishaa/Fluffy/blob/master/LICENSE
  -->

<template>
  <div class="flex-none w-full md:max-w-xs shadow-lg">
    <nav class="p-8 flex flex-col">
      <div class="inline-flex items-center justify-center">
        <img alt="Logo Fluffy" class="h-20 mr-4" src="@/assets/min-logo.png" />
        <h1 class="text-5xl fluffy-title leading-none text-red-600 mt-8">
          Fluffy
        </h1>
      </div>
      <hr class="my-8" />
      <div class="mb-4">
        <small class="text-gray-600">Configuration</small>
        <ul class="mt-1">
          <li>
            <i class="fas fa-book mr-4 text-gray-600"></i
            ><a href="#">Mise en route</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Sidebar"
};
</script>
