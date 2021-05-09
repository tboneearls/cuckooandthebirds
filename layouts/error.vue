<template>
  <main class="text-center text-white">
    <div id="navbar-offset" />
    <text-card>
      <h1 class="text-2xl my-8">
        Whoaaaa there, pal.
      </h1>

      <p class="mx-auto text-lg my-8">
        Looks like you flew out of the nest.
      </p>

      <nuxt-link
        to="/"
        class="text-base my-8 px-2 py-4 sm:px-4 text-red-600 hover:text-cyan-300 hover:opacity-100 rounded-sm"
      >
        Let's go home.
      </nuxt-link>
    </text-card>
  </main>
</template>

<script>
import TextCard from "@/components/widgets/TextCard.vue";

export default {
  components: {
    TextCard,
  },
};
</script>

<style>
body #navbar-offset {
  @apply mt-16;
}
body.nav-active #navbar-offset {
  /* 4 items in nav, 28 mt difference. mt change = nav items * 7 */
  @apply mt-48 sm:mt-20 sm:pt-0;
}
</style>
