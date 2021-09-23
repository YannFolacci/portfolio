<template>
  <footer class="">
      <!-- Site name, contact email and copyright -->
      <div>
        <g-link to="/" class="logo">
          {{ $static.strapi.global.siteName }}
        </g-link>
        <p class="logo">
          {{ new Date().getFullYear() }}
        </p>
      </div>
      <!-- Social network links -->
      <ul class="line">
        <li
          v-for="socialNetwork in $static.strapi.global.socialNetworks" 
          :key="socialNetwork.id"
        >
          <a
            :href="socialNetwork.url"
            target="_blank"
            rel="noopener noreferrer"
            class="py-1 flex flex-row items-center gap-2"
          >
            <img
              :src="getStrapiMedia(socialNetwork.icon.url)"
              :alt="socialNetwork.title"
              class="w-4"
            />
          </a>
        </li>
      </ul>
      <a :href="`mailto:${ $static.strapi.global.contactEmail }`"  >{{ $static.strapi.global.contactEmail }}</a>
  </footer>
</template>

<script>
import { getStrapiMedia } from '~/utils/medias'

export default {
  methods: {
    getStrapiMedia,
  },
  computed: {
    pages() {
      // Select random project index
      const { projects } = this.$static.strapi
      const randomIndex = Math.floor(Math.random() * projects.length)
      return [
        {
          title: 'Home',
          path: '/',
        },
        {
          title: 'About',
          path: '/about',
        },
        {
          title: 'Random project',
          path: `/project/${projects[randomIndex].slug}`,
        }
      ]
    },
  }
}
</script>

<static-query>
query {
  strapi {
    global {
      siteName
      contactEmail
      socialNetworks {
        id
        url
        title
        icon {
          id
          url
        }
      }
    }
    projects {
      id
      slug
    }
  }
}
</static-query>
<style>
  footer, footer div, footer ul{
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  footer{
    padding:20px;
    height:50px;
  }
  footer p{
    margin: 0 20px;
  }
  footer ul img{
      width: 25px;
  }
</style>