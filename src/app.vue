<template>
  <div class="message">
    {{ message }}
  </div>
</template>

<script>
export default {

  data: function() {
    return {
      message: 'hello, world 2'
    }
  }

}
</script>

<style scoped>
.message {
  color: red;
}
</style>
