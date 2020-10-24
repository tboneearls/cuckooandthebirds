import { join } from "path";

export default {
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.(css|vue)$/,
            chunks: "all",
            enforce: true
          }
        }
      }
    }
  },
  buildModules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-156905265-1"
      }
    ],
    "@nuxtjs/tailwindcss"
  ],
  mode: "spa",
  postcss: {
    plugins: {
      tailwindcss: join(__dirname, "tailwind.config.js")
    },
    preset: {
      stage: 2
    }
  },
  tailwindcss: {
    exposeConfig: true
  },
  babel: {
    presets({ isServer }) {
      return [
        [
          require.resolve("@nuxt/babel-preset-app"),
          {
            buildTarget: isServer ? "server" : "client",
            corejs: { version: 2 }
          }
        ]
      ];
    }
  },
  plugins: ["~/plugins/cloudinary.js"],
  head: {
    htmlAttrs: {
      lang: "en"
    },
    titleTemplate: "Cuckoo and the Birds | Chicago, IL",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1.0,shrink-to-fit=no"
      },
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: "description",
        name: "description",
        content:
          "Cuckoo and the Birds is a Chicago rock band who play sad songs that flirt with harmonies."
      },
      {
        name: "image",
        content:
          "https://res.cloudinary.com/cuckooandthebirds/image/upload/c_scale,w_450/v1580078198/Twin%20Stars/laser-tyler.jpg"
      },
      {
        property: "og:description",
        content:
          "Cuckoo and the Birds is a Chicago rock band who play sad songs that flirt with harmonies."
      },
      {
        property: "og:title",
        content: "Cuckoo and the Birds | Chicago, IL"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:url",
        content: "https://www.cuckooandthebirds.com"
      },
      {
        property: "og:image",
        content:
          "https://res.cloudinary.com/cuckooandthebirds/image/upload/c_scale,w_450/v1590178958/Twin%20Stars/laser-tyler-og.png"
      },
      {
        property: "og:image:alt",
        content: "Laser Tyler"
      },
      { name: "author", content: "Cuckoo and the Birds" },
      {
        name: "keywords",
        content:
          "HTML, CSS, JavaScript, Vue, Node.js, Chicago, Illinois, Rock, Music, DIY, Emo, Indie, Guitar, Bass, Drums, Vocals, Chicago Rock, Cuckoo, and, the, Birds"
      }
    ],
    link: [
      {
        href:
          "https://fonts.googleapis.com/css?family=Asul:100,200,300,400,500,600,700&display=swap",
        rel: "preload",
        as: "style",
        onload: "this.onload = null; this.rel = 'stylesheet';"
      },
      {
        href: "images/vulcan-salute.ico",
        rel: "icon"
      }
    ],
    noscript: [
      {
        innerHTML:
          "<strong>We're sorry. Cuckoo and the Birds don't work properly without JavaScript enabled. Please enable it to continue.</strong>",
        body: true
      }
    ],
    // scripts will not be url-encoded
    __dangerouslyDisableSanitizers: ["script"],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "http://schema.org/",
          "@type": "Organization",
          name: "Cuckoo and the Birds",
          email: "cuckooandthebirds@gmail.com",
          url: "https://www.cuckooandthebirds.com"
        })
      }
    ]
  }
};
