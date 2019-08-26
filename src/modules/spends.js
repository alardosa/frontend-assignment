const state = {
  history: [
    {
      from: 'microsoft',
      to: 'google-cloud',
      value: '$500,000'
    },
    {
      from: 'microsoft',
      to: 'century-link-cdn',
      value: '$300,000'
    }
  ]
}

const getters = {
  getSpendHistoryBuyerByCompanyId: ({ history }) => companyId => {
    return history.filter(e => e.from === companyId)
  }
}

export default {
  namespaced: true,
  state,
  getters
}
