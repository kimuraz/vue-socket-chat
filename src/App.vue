<template>
  <div id="app">
    <Login v-if="!$store.getters['getUser']"/>
    <div v-else class="room-holder">
      <ChatRoom/>
    </div>
  </div>
</template>

<script>
import ChatRoom from './components/ChatRoom';
import Login from './components/Login';

export default {
  name: 'app',
  components: {
    ChatRoom,
    Login
  },
  created() {
    const user = localStorage.getItem('user');
    const avatar = localStorage.getItem('avatar');
    user && this.$store.commit('setUser', user);
    avatar && this.$store.commit('setAvatar', avatar);
  },
};
</script>

<style lang="sass">
html, body
  margin: 0
  padding: 0
  height: 100vh
  width: 100vw
  overflow: hidden

input
  font-size: .875rem
  outline: 0
  padding: 0 5px
  border-radius: 4px
  color: #363636
  border: 2px solid #363636
#app
  font-family: "Avenir", Helvetica, Arial, sans-serif
  display: flex
  height: 100%
  .room-holder
    padding: 10px 30px
    height: 100%
    width: 100vw
</style>
