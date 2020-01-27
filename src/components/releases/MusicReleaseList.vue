<template>
    <section>
        <div v-for="(release, index) in releases" :key="index">
            <slot :title="release.title" :year="release.year" name="title">
                <h2>{{ release.title }} | {{ release.year }}</h2>
            </slot>

            <br/>

            <slot name="image">
                <cld-image :publicId="release.imgsrc">
                    <cld-transformation width="700" crop="scale" />
                </cld-image>
            </slot>

            <slot name="description">
                <p>{{ release.description }}</p>
            </slot>

            <br/>

            <slot name="credits">
                <div class="credits">
                    <p>Tyler Earls: Vocals, Guitars, Bass</p>
                    <p>Zachary Taylor: Drums, Percussion</p>
                    <br/>

                    <p>Songs written by Tyler Earls</p>
                    <p>Tracked, Mixed, and Mastered by Zachary Taylor</p>
                    <br/>

                    <p>Artwork by Breanda Fedie</p>
                    <p>Zachary Taylor plays drums on this EP and recorded it.</p>
                </div>
            </slot>
        </div>
    </section>
</template>

<script>
const releases = [
  {
    imgsrc: "Twin%20Stars/twin-stars-album-art.jpg",
    year: 2019,
    href: "twin-stars",
    title: "Twin Stars",
    description: "Twin Stars is a 5-track EP recorded in Zachary Taylor's basement in Addison in the Spring of 2018. These songs are the first that Tyler wrote for Cuckoo and the Birds.",
  },
];
export default {
  data() {
    return {
      releases,
    };
  },
};
</script>
