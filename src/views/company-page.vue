<template>
  <section class="Company">
    <CompanyHeader
      v-if="company.id"
      :id="company.id"
      :name="company.name"
      :location="company.location"
      :description="company.description"
    />
    <div class="row">
      <div class="w-1-2">
        <CCard title="Activities">
          <ul class="Card__Content__List ">
            <li
              v-for="({ company, timePassed, type, message }, index) of company.activities"
              :key="`activities-${index}`"
              class="Card__Content__Item Card__Content__Item--separated"
            >
              <span class="Card__Content__timePassed">{{ timePassed }} </span>
              <div class="Card__Content__type">
                <img
                  :src="`/assets/images/activities/${type}.png`"
                  :alt="`${type}`"
                  class="Card__Content__typeImage"
                  width="24"
                  height="24"
                />
              </div>
              <span class="Card__Content__Message">{{ message }} </span>
            </li>
          </ul>
        </CCard>
      </div>
      <div class="w-1-2">
        <CCard title="Similar Companies">
          <ul class="Card__Content__List ">
            <li
              v-for="(id, index) of company.similarTo"
              :key="`similimar-${index}`"
              class="Card__Content__Item"
            >
              <div class="Company__Logo Company__Logo--small">
                <img
                  :src="`/assets/images/companies/${id}.png`"
                  :alt="`${getCompanyNameById(id)}`"
                  width="32"
                  class="Company__Logo__Image"
                />
              </div>
              <router-link :to="`/company-page/${id}`" class="Company__Logo__Name">
                {{ getCompanyNameById(id) }}
              </router-link>
            </li>
          </ul>
        </CCard>
        <CCard title="Company Spend History">
          <div class="Card__Content Card__Content--spend-history"></div>
        </CCard>
        <CCard title="Company Spend History">
          <ul class="Card__Content__List ">
            <li
              v-for="({ from, to, value }, index) of getSpendHistoryBuyerByCompanyId(company.id)"
              :key="`spend-${index}`"
              class="Card__Content__Item"
            >
              <div class="Company__Logo Company__Logo--small">
                <img
                  :src="`/assets/images/companies/${to}.png`"
                  :alt="`${getCompanyNameById(to)}`"
                  width="32"
                  class="Company__Logo__Image"
                />
              </div>
              <div class="Card__Content__Message">
                <router-link class="Card__Content__Message__Title" :to="`/company-page/${to}`">{{
                  getCompanyNameById(to)
                }}</router-link>
                <span> {{ company.name }} spend on product {{ value }} </span>
              </div>
            </li>
          </ul>
        </CCard>
      </div>
    </div>
  </section>
</template>
<script>
import CCard from 'Components/common/card'
import CompanyHeader from 'Components/company/header'
export default {
  name: 'CompanyPage',
  components: {
    CCard,
    CompanyHeader
  },
  data: () => ({
    company: {}
  }),
  mounted() {
    this.company = this.getCompanyDataById('microsoft')
    this.company.activities = this.getActivitiesByCompanyId('microsoft')
    this.company.spends = this.getSpendHistoryBuyerByCompanyId('microsoft')
  },
  methods: {
    getActivitiesByCompanyId(companyId) {
      return this.$store.getters['activities/getActivitiesByCompanyId'](companyId)
    },
    getCompanyDataById(companyId) {
      return this.$store.getters['companies/getCompanyDataById'](companyId)
    },
    getSpendHistoryBuyerByCompanyId(companyId) {
      return this.$store.getters['spends/getSpendHistoryBuyerByCompanyId'](companyId)
    },
    getCompanyNameById(companyId) {
      return this.$store.getters['companies/getCompanyNameById'](companyId)
    }
  }
}
</script>
