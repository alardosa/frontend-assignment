const state = {
  activities: [
    {
      company: 'microsoft',
      timePassed: '8 days ago',
      type: 'video-platform',
      message: '[Cloud Ochestration](#) replaced ~Microsoft~ on 1 property'
    },
    {
      company: 'microsoft',
      timePassed: '10 days ago',
      type: 'content-delivery',
      message: '[Express Scripts](#) replaced ~Microsoft~ on 1 property'
    },
    {
      company: 'microsoft',
      timePassed: '12 days ago',
      type: 'waf-d-dos-security',
      message: '[Kaiser Permanente](#) replaced ~Microsoft~ on 1 property'
    },
    {
      company: 'microsoft',
      timePassed: '12 days ago',
      type: 'waf-d-dos-security',
      message: '[Kaiser Permanente](#) replaced ~Microsoft~ on 1 property'
    },
    {
      company: 'microsoft',
      timePassed: '14 days ago',
      type: 'traffic-management',
      message: '[Molina Healthcare](#) replaced ~Microsoft~ on 1 property'
    },
    {
      timePassed: '15 days ago',
      type: 'performance-monitoring',
      message: '[Kaiser Permanente](#) replaced ~Microsoft~ on 1 property'
    },
    {
      company: 'microsoft',
      timePassed: '16 days ago',
      type: 'saas',
      message: '[Molina Healthcare](#) replaced ~Microsoft~ on 1 property'
    },
    {
      company: 'microsoft',
      timePassed: '18 days ago',
      type: 'content-delivery',
      message: 'Microsoft launched M-Cloud'
    }
  ]
}

const getters = {
  getActivitiesByCompanyId: ({ activities }) => companyId => {
    return activities.filter(e => e.company === companyId)
  }
}

export default {
  namespaced: true,
  state,
  getters
}
