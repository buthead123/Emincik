<template>
  <button class="button is-primary" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'harun-button',

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style>
button {
  border: 1px solid #eee;
  border-radius: 7px;
  background-color: #yellow;
  cursor: pointer;
  font-size: 8pt;
  padding: 3px 10px;
  margin: 10px;
}
</style>
