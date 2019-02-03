<template>
  <div class="login-bg">
    <div class="login-card">
      <label>Nickname</label>
      <br />
      <input v-model="user" type="text" />
      <br />
      <label>Avatar URL</label>
      <br />
      <input v-model="avatar" type="text" />
      <br />
      <input type="checkbox" v-model="remember" /> Remember me
      <br />
      <button @click="save">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      user: "",
      avatar: "",
      remember: true
    };
  },
  methods: {
    save() {
      if (!this.user) {
        alert("Fill up your nickname!");
        return;
      }
      this.$store.commit("setUser", this.user);
      this.$store.commit("setAvatar", this.avatar);
      if (this.remember) {
        localStorage.setItem("user", this.user);
        localStorage.setItem("avatar", this.avatar);
      }
    }
  }
};
</script>

<style lang="sass">
.login-bg
  width: 100%
  height: 100%
  position: absolute
  background-color: rgba(0,0,0,.2)
  .login-card
    border-radius: 2px
    background-color: white
    border: 1px solid #363636
    padding: 10px 5px
    width: 300px
    height: 150px
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    position: absolute
    input[type="text"]
      width: 95%
      padding: 5px
    button
      padding: 5px 20px
      border: 1px solid #37284c
      color: white
      background-color: #825bb2
      outline: none
      cursor: pointer
      transition: all .5s ease
      float: right
      border-radius: 3px
      &:hover
        background-color: #5b427f
</style>
