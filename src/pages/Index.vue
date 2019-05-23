<template>
  <Layout class="text-center">
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" class="mb-8 inline-block"/>

    <h1 class="text-xl font-bold mb-8">{{ $static.metaData.siteName }}</h1>

    <p class="max-w-md m-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores</p>

  </Layout>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>
