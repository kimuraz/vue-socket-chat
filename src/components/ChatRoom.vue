<template>
  <div class="chat-room">
    <main>
      <ul class="message-list" ref="list">
        <Message v-for="(msg, idx) in messages" :msg="msg" :key="idx" />
      </ul>
    </main>

    <footer>
      <input
        @keyup.enter="send"
        v-model="msgText"
        placeholder="Type your message..."
      />

      <EmojiPopup
        :filter="filterEmoji"
        v-show="showEmojis"
        @emoji="replaceByEmoji"
        @none="showEmojis = false"
      />
    </footer>
  </div>
</template>

<script>
import io from "socket.io-client";
import Message from "./Message";
import EmojiPopup from "./EmojiPopup";

export default {
  data() {
    return {
      io: null,
      messages: [],
      msgText: "",
      filterEmoji: "",
      showEmojis: false
    };
  },
  components: {
    Message,
    EmojiPopup
  },
  created() {
    this.io = io("http://192.168.0.12:3000");
    this.io.emit("user", { user: this.$store.getters["getUser"] });
    this.io.on("msg", msg => {
      this.messages.push(msg);
      this.$nextTick(() => {
        this.$refs.list.scrollTop = this.$refs.list.scrollHeight;
      });
    });
  },
  methods: {
    send() {
      this.io.emit("msg", {
        author: this.$store.getters["getUser"],
        datetime: new Date(),
        text: this.msgText,
        avatar: this.$store.getters["getAvatar"]
      });
      this.msgText = "";
    },
    replaceByEmoji(emoji) {
      this.msgText = this.msgText.replace(/:\w+:?/g, emoji);
    }
  },
  watch: {
    msgText(val) {
      const re = /:\w+:?/g;
      const emojiMatch = re.exec(val);
      if (emojiMatch) {
        this.showEmojis = true;
        this.filterEmoji = emojiMatch[0].replace(":", "");
      } else {
        this.showEmojis = false;
        this.filterEmoji = "";
      }
    }
  }
};
</script>

<style lang="sass">
.chat-room
  width: 100%
  height: 100%
  overflow: hidden
  main
    height: calc(100% - 75px)
  ul
    height: 100%
    list-style: none
    margin: 0
    padding: 0
    border: 1px solid #C6C6C6
    border-radius: 2px
    overflow-y: auto
    overflow-x: hidden
  footer
    height: 40px
    padding: 10px 0
    width: 100%
    display: flex
    position: relative
    > input
      flex: 1
</style>
