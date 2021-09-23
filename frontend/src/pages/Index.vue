<template>
  <Layout>
    <main>
      <section id="hero">
        <Three/>
        <div>
          <h1>Yann Folacci</h1>
          <h2>fullstack & creative developer junior</h2>
        </div>
      </section>
      <section >
        <p>Bienvenue sur mon portfolio,</p>
        <p>Moi c’est Yann Folacci !</p>
      </section>
    </main>
  </Layout>
</template>

<page-query>
query {
  strapi {
    # Get homepage data
    home {
      title
      bio
      # Metadata for SEO
      seo {
        title
        description
        shareImage {
          id
          url
        }
      }
    }
    # List projects
    projects(sort: "date:desc") {
      title
      slug
      description
      categories {
        id
        title
      }
      coverImage {
        id
        url
      }
    }
  }
}
</page-query>

<script>
import Three from '~/components/Three'
import ProjectCard from '~/components/ProjectCard'
import RichText from '~/components/RichText'
import { getStrapiMedia } from '~/utils/medias'
import { getMetaTags } from '~/utils/seo'

export default {
  methods: {
    getStrapiMedia,
  },
  components: {
    ProjectCard,
    RichText,
    Three,
  },
  metaInfo() {
    const { title, description, shareImage } = this.$page.strapi.home.seo
    // const image = getStrapiMedia(shareImage.url)
    return {
      title,
      meta: getMetaTags(title, description, image),
    }
  },
}
</script>

<style>
#hero{
    min-height: calc(100vh - 200px);
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
