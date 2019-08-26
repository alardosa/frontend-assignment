<template>
  <header class="Company__Header">
    <div class="Company__Brand">
      <div class="Company__Logo">
        <img
          :src="`/assets/images/companies/${id}.png`"
          :alt="`${name}`"
          width="32"
          class="Company__Logo__Image"
        />
      </div>
      <div class="Company__Details">
        <h1 class="Company__Title">{{ name }}</h1>
        <div class="Company__Location">
          <img
            class="Company__Location-Icon"
            src="/assets/images/icons/location.png"
            alt="Location Pin"
            width="9"
          />
          <span>{{ location }}</span>
        </div>
      </div>
    </div>
    <p class="Company__Description">
      {{ description }} <router-link to="/">View More...</router-link>
    </p>
  </header>
</template>
<script>
export default {
  name: 'CompanyHeader',
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>
