<template>
  <div class="login-form">
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          id="email"
          type="email"
          v-model="form.email"
          required
          autocomplete="email"
          :disabled="isLoading"
        />
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input
          id="password"
          type="password"
          v-model="form.password"
          required
          autocomplete="current-password"
          :disabled="isLoading"
        />
      </div>

      <div class="form-actions">
        <button type="submit" class="btn-login" :disabled="isLoading">
          {{ isLoading ? 'Logging in...' : 'Login' }}
        </button>
      </div>

      <div v-if="error" class="error-message" role="alert">
        {{ error }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/auth.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()

const form = reactive({
  email: '',
  password: '',
})

const error = ref('')
const isLoading = ref(false)

const handleLogin = async () => {
  if (isLoading.value) return

  error.value = ''
  isLoading.value = true

  try {
    await authStore.login({
      email: form.email,
      password: form.password,
    })

    // Redirect to dashboard on successful login
    router.push('/dashboard')
  } catch (err) {
    if (err.response?.data?.errors) {
      // Format validation errors if available
      const validationErrors = err.response.data.errors
      error.value = Object.values(validationErrors).flat().join(', ')
    } else {
      error.value = err.response?.data?.message || err.message || 'Login failed. Please try again.'
    }
  } finally {
    isLoading.value = false
  }
}
</script>
<style scoped>
.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(48, 48, 48, 0.1);
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-actions {
  margin-top: 1.5rem;
}

.btn-login {
  width: 100%;
  padding: 0.75rem;
  background-color: #4c6ef5;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-login:hover:not(:disabled) {
  background-color: #3b5bdb;
}

.btn-login:disabled {
  background-color: #a5b4fc;
  cursor: not-allowed;
}

.error-message {
  margin-top: 1rem;
  padding: 0.75rem;
  color: #e03131;
  background-color: #ffe3e3;
  border-radius: 4px;
  font-size: 0.875rem;
}
</style>
