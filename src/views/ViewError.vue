<!--
  - Fluffy - https://github.com/SirMishaa/Fluffy
  - Author - SirMishaa
  - License GNU General Public License v3.0 - https://github.com/SirMishaa/Fluffy/blob/master/LICENSE
  -->

<template>
  <div
    class="w-full h-full rounded bg-white flex flex-col justify-center items-center"
  >
    <img
      alt="Logo d'erreur"
      class="h-64 mb-12"
      src="@/assets/illustration_houston.svg"
    />
    <h1 class="text-4xl text-gray-800">
      Houston, nous avons
      <span class="border-b-4 border-red-600 text-red-600">un problème !</span>
    </h1>
    <h2 class="text-gray-700 mt-4">
      Impossible de charger les données depuis l'API
    </h2>
    <div class="flex mt-4">
      <a class="text-red-600 text-underline mx-4" href="#">Ouvrir une issue</a>
      <span>-</span>
      <a class="text-red-600 text-underline mx-4" href="#"
        >Actualiser la page</a
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "ViewError"
};
</script>
