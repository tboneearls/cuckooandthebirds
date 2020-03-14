<template>
  <div class="social-container">
    <a
      v-for="(link, index) in socialLinks"
      :key="index"
      class="social-link"
      rel="noreferrer"
      target="_blank"
      :href="link.href"
      :aria-label="`Visit Cuckoo and the Birds ${link.label}`"
    >
      <span>
        <font-awesome-icon
          :icon="[link.icon.lib, link.icon.to]"
          size="1x"
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
 * label: website name that will be attached to aria-label
 * icon: css class for font-awesome icon
 */
const socialLinks = [
  {
    href: "https://cuckooandthebirds.bandcamp.com",
    label: "Bandcamp",
    icon: {
      lib: "fab",
      to: "bandcamp",
    },
  },
  {
    href: "https://open.spotify.com/artist/3JcmKe00eIMMsC0MRkKknD",
    label: "Spotify",
    icon: {
      lib: "fab",
      to: "spotify",
    },
  },
  {
    href: "https://www.soundcloud.com/cuckooandthebirds/sets/twin-stars",
    label: "Soundcloud",
    icon: {
      lib: "fab",
      to: "soundcloud",
    },
  },
  {
    href: "mailto:cuckooandthebirds@gmail.com",
    label: "Email",
    icon: {
      lib: "fa",
      to: "envelope",
    },
  },
  {
    href: "https://www.instagram.com/cuckooandthebirds",
    label: "Instagram",
    icon: {
      lib: "fab",
      to: "instagram",
    },
  },
  {
    href: "https://www.facebook.com/cuckooandthebirds",
    label: "Facebook",
    icon: {
      lib: "fab",
      to: "facebook",
    },
  },
  {
    href: "https://www.twitter.com/cuckooandbirds",
    label: "Twitter",
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

<style lang="scss">
@import "~/assets/scss/global.scss";

nav .social-container {
    position: absolute;
    bottom: 70px;
    left: 32px;
    margin: 0;
}

.social-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.social-link {
    margin: 5px 0;
    span {
        color: $red;
        display: inline-block;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        padding: .35rem .7rem;
        font-size: 1.5rem;
        line-height: 1.5;
        border-radius: .25rem;
        &:hover {
            color: $lightblue;
            transition: all 0.2s ease;
        }
    }
}
</style>
