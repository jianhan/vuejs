<template>
  <div class="spinner">
  </div>
</template>

<script>
import AuthService from '@/auth/service'
const auth = new AuthService()
const { handleAuthentication } = auth

export default {
  name: 'callback',
  data () {
    handleAuthentication()
    return {}
  }
}
</script>
