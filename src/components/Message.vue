<template>
  <li class="message">
    <header class="header">
      <img :src="msg.avatar || 'https://cdn1.iconfinder.com/data/icons/people-avatars-10/24/people_avatar_head_harry_potter_mage_magic-512.png'"/>
      <b>{{ msg.author }}</b>
      <p> {{ msg.datetime }}</p>
    </header>
    <main>
      <p>{{ msg.text }}</p>
    </main>
  </li>
</template>

<script>
export default {
  name: 'message',
  props: {
    msg: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="sass">
.message
  width: 100%
  margin: 10px
  p
    margin: 3px 0
  header
    display: flex
    font-size: .725rem
    align-items: center
    > p
      margin-left: 5px
      font-size: .625rem
    > img
      width: 30px
      height: 30px
      margin-right: 5px
      border-radius: 2px
      padding: 2px
      background-color: #F0F0F0

</style>
