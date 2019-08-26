<template>
  <nav class="Navigation">
    <router-link
      v-for="({ to, name }, index) of items"
      :key="`Navigation__link--${index}`"
      :to="to"
      :title="name"
      class="Navigation__link"
      active-class="Navigation__link--actived"
      exact-active-class="Navigation__link--exact"
      >{{ name }}</router-link
    >
  </nav>
</template>
<script>
export default {
  name: 'CommonNavigation',
  data: () => ({
    items: [
      { to: '/company-data', name: 'Company Data' },
      { to: '/company-page', name: 'Company Page' }
    ]
  })
}
</script>
