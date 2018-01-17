<template>
  <div class="spinner">
  </div>
</template>

<script>
import AuthService from '@/auth/service'
const auth = new AuthService()

export default {
  name: 'callback',
  data () {
    auth.handleAuthentication()
    return {}
  }
}
</script>
