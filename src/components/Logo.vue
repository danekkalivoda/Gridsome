<template>
	<g-link class="logo" to="/">
	  <span class="logo__text">
	    &larr; {{ $static.metaData.siteName }}
	  </span>
	</g-link>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>