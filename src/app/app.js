export default {
  data() {
    return {
      userEmail: '',
      responseData: null,
      total: 0
    }
  },
  computed: {
    result() {
      if (this.responseData) return this.responseData
      return ''
    },
    totalDisplay() {
      this.getCurrent()
      return this.total
    }
  },
  methods: {
    submitToCheck: async function() {
      const response = await fetch('https://www.thef2e.com/api/isSignUp', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.userEmail
        })
      })
      const data = await response.json()
      this.responseData = data
    },
    getCurrent: async function() {
      const response = await fetch('https://www.thef2e.com/api/signUpTotal', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })

      const data = await response.json()
      this.total = data.total
    }
  }
}
