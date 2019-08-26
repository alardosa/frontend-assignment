<template>
  <section class="Company">
    <CCard>
      <span>
        Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </span>
      <CompanyForm />
    </CCard>
  </section>
</template>
<script>
import CCard from 'Components/common/card'
import CompanyForm from 'Components/company/form'
export default {
  name: 'CompanyDataPage',
  components: {
    CCard,
    CompanyForm
  }
}
</script>
