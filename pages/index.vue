<template>
  <div>
    <TextCard>
      <template>
        <h1 class="text-center font-default text-4xl font-bold text-red-600 mb-4">
          Our Story
        </h1>
        <section class="text-white text-xl">
          <p>
            Cuckoo and the Birds hail from Chicago, IL. The name dates back to when Tyler Earls tried his hand at a solo project in high school after getting kicked out of the band he was in.
          </p>
          <br>
          <p>
            He played one show in the basement of a house party. While performing, the drummer of the main band started blasting his double bass pedal behind him to "test it out," which inspired much of the audience to generally talk over him until finally that band played, when in the excitement someone rammed their friend's head through the drywall.
          </p>
          <br>
          <p>
            Several years later, Tyler resolved for better or worse to bring Cuckoo and the Birds back from the dead—but this time around, he rams heavy metal drummers through the wall.
          </p>
          <br>
          <p>
            For booking inquiries, please email <a
              class="text-teal-400"
              target="_blank"
              rel="noreferrer"
              href="mailto:cuckooandthebirds@gmail.com"
            >cuckooandthebirds@gmail.com</a>.
          </p>
        </section>
      </template>
    </TextCard>
  </div>
</template>

<script>
import TextCard from "../components/widgets/TextCard.vue";

export default ({
  components: {
    TextCard,
  },
});
</script>

<style>
</style>
