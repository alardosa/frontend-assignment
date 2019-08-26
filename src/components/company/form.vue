<template>
  <div>
    <modal name="addNotes" class="Card">
      <form class="Form" @submit.stop.prevent="onModalSubmit">
        <div class="Form__Group">
          <label class="Form__Label" for="company-notes">Notes</label>
          <textarea
            id="company-notes"
            v-model="modal.notes"
            class="Form__Input Form__Input--textarea"
            placeholder="e.g. Good Tech Company"
            rows="6"
          />
        </div>
        <div class="Form__Group">
          <input class="Form__Button Form__Button--right" type="submit" value="Save" />
        </div>
      </form>
    </modal>
    <form class="Form" @submit.stop.prevent="onSubmit">
      <div class="Form__Group">
        <label class="Form__Label" for="company-name">Company Name</label>
        <input
          id="company-name"
          v-model="form.name"
          :class="{ 'Form__Input--error': isNameWrong }"
          class="Form__Input"
          type="text"
          placeholder="e.g. Your Company Name"
        />
      </div>
      <div v-if="isNameWrong" class="Form__Error">
        Company Name is required.
      </div>
      <div class="Form__Group">
        <label class="Form__Label" for="company-spend">Company Spend</label>
        <input
          id="company-spend"
          v-model="form.spend"
          :class="{ 'Form__Input--error': isSpendWrong }"
          class="Form__Input"
          type="tel"
          placeholder="e.g. $150,000"
          @focus="removeSpendMask()"
          @blur="addSpendMask()"
        />
      </div>
      <div v-if="isSpendWrong" class="Form__Error">
        Company Spend is required.
      </div>
      <div class="Form__Group">
        <label class="Form__Label" for="company-ability">Company Spend Ability</label>
        <input
          id="company-ability"
          v-model="form.ability"
          :class="{ 'Form__Input--error': isAbilityWrong }"
          class="Form__Input"
          type="tel"
          placeholder="e.g. $150,000 - $330,000"
          @focus="removeAbilityMask()"
          @blur="addAbilityMask()"
        />
      </div>
      <div v-if="isAbilityWrong" class="Form__Error">
        Company Spend Ability is required and second value must be less than the first.
      </div>
      <div class="Form__Group">
        <label class="Form__Label" for="company-notes">Notes</label>
        <textarea
          id="company-notes"
          class="Form__Input Form__Input--textarea"
          placeholder="e.g. Good Tech Company"
          readonly
          rows="6"
          :value="form.notes"
          @focus="openModal"
        />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'CompanyForm',
  data: () => ({
    modal: {
      notes: null
    },
    form: {
      name: null,
      spend: null,
      ability: null,
      notes: null
    }
  }),
  computed: {
    isNameWrong() {
      return typeof this.form.name === 'string' && !this.form.name
    },
    isSpendWrong() {
      return typeof this.form.spend === 'string' && !this.form.spend
    },
    isAbilityWrong() {
      const { ability } = this.form
      if (!ability) return typeof ability === 'string'
      const groups = ability.split('-') || []
      return groups.length == 2 ? this.rawNumber(groups[0]) > this.rawNumber(groups[1]) : true
    }
  },
  methods: {
    onModalSubmit() {
      this.form.notes = this.modal.notes
      this.$modal.hide('addNotes')
    },
    onSubmit() {
      return
    },
    openModal() {
      this.$modal.show('addNotes')
    },
    rawNumber: number => number.replace(/\D+/g, '') || 0,
    addSpendMask() {
      let { spend } = this.form
      if (!spend) return
      const rawSpend = this.rawNumber(spend)
      const length = rawSpend.length

      this.form.spend = `$${
        length > 3
          ? `${rawSpend.slice(0, length - 3)},${rawSpend.slice(length - 3, length)}`
          : rawSpend
      }`
    },
    removeSpendMask() {
      if (this.form.spend) this.form.spend = this.form.spend.replace(/\D+/g, '')
    },
    addAbilityMask() {
      let ability = this.form.ability
      if (!ability) return
      const clean = value => value.replace(/(?![,])(\D+)/gm, '') || '0'
      let groups = ability.split('-') || []
      if (groups.length !== 2) groups = [clean(ability) || '0', '0']
      groups = groups.map(e => {
        const raw = e.replace(/\D+/g, '')
        const length = raw.length
        return `$${
          length > 3 ? `${raw.slice(0, length - 3)},${raw.slice(length - 3, length)}` : raw
        }`
      })
      this.form.ability = groups.join(' - ')
    },
    removeAbilityMask() {
      if (this.form.ability)
        this.form.ability = this.form.ability
          .split('-')
          .map(e => e.replace(/\D+/g, ''))
          .join('-')
    }
  }
}
</script>
