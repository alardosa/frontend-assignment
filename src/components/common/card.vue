<template>
  <article class="Card">
    <header v-if="title" class="Card__Title">{{ title }}</header>
    <div class="Card__Content">
      <slot />
    </div>
  </article>
</template>
<script>
export default {
  name: 'CommonCard',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
