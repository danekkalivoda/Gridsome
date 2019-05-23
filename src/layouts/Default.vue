<template>
  <div class="max-w-5xl m-auto">
    <header class=" bg-gray-200 p-8 mb-8 rounded-lg mt-4">
      <strong class="mb-2 block">
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav>
        <g-link class="inline-flex bg-gray-800 text-white hover:bg-white hover:text-green-500 mx-2 px-4 rounded" to="/">Home</g-link>
        <g-link class="inline-flex bg-gray-800 text-white hover:bg-white hover:text-green-500 mx-2 px-4 rounded" to="/about">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
