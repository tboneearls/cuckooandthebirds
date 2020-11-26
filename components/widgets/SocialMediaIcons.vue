<template>
  <div class="flex justify-center">
    <a
      v-for="(link, index) in socialLinks"
      :key="index"
      class="mt-4 px-2 py-4 sm:px-4 text-red-600 hover:text-cyan-300 hover:opacity-100 rounded-sm"
      rel="noreferrer"
      target="_blank"
      :href="link.href"
      :aria-label="`Visit Cuckoo and the Birds's ${link.ariaLabel}`"
    >
      <span>
        <font-awesome-icon
          :icon="[link.icon.lib, link.icon.to]"
          size="lg"
        />
      </span>
    </a>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBandcamp, faSpotify, faSoundcloud, faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBandcamp, faSpotify, faSoundcloud, faEnvelope, faInstagram, faFacebook, faTwitter);

// TODO: add socialLinks to setup hook when Vue 3.x is released

/*
 * href: link to social media site
 * ariaLabel: website name that will be attached to aria-label
 * icon: {
 *  lib: font-awesome class
 *  to: name of destination (lowercase)
 * }
 */
const socialLinks = [
  {
    href: "https://cuckooandthebirds.bandcamp.com",
    ariaLabel: "Bandcamp",
    icon: {
      lib: "fab",
      to: "bandcamp",
    },
  },
  {
    href: "https://open.spotify.com/artist/3JcmKe00eIMMsC0MRkKknD",
    ariaLabel: "Spotify",
    icon: {
      lib: "fab",
      to: "spotify",
    },
  },
  {
    href: "https://www.soundcloud.com/cuckooandthebirds/sets/twin-stars",
    ariaLabel: "Soundcloud",
    icon: {
      lib: "fab",
      to: "soundcloud",
    },
  },
  {
    href: "mailto:cuckooandthebirds@gmail.com",
    ariaLabel: "Email",
    icon: {
      lib: "fa",
      to: "envelope",
    },
  },
  {
    href: "https://www.instagram.com/cuckooandthebirds",
    ariaLabel: "Instagram",
    icon: {
      lib: "fab",
      to: "instagram",
    },
  },
  {
    href: "https://www.facebook.com/cuckooandthebirds",
    ariaLabel: "Facebook",
    icon: {
      lib: "fab",
      to: "facebook",
    },
  },
  {
    href: "https://www.twitter.com/cuckooandbirds",
    ariaLabel: "Twitter",
    icon: {
      lib: "fab",
      to: "twitter",
    },
  },
];

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      socialLinks,
    };
  },
};
</script>
