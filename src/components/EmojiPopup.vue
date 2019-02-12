<template>
  <div class="emoji-popup">
    <span
      :key="e.char"
      v-for="e in filteredEmojis"
      @click="$emit('emoji', e.char)"
    >
      {{ e.char }}
    </span>
  </div>
</template>

<script>
import emoji from "emojilib";

export default {
  name: "emojiPopup",
  props: {
    filter: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      emojis: Object.values(emoji.lib)
    };
  },
  computed: {
    filteredEmojis() {
      return this.emojis.filter(e =>
        e.keywords.some(k => k.startsWith(this.filter))
      );
    }
  },
  watch: {
    filteredEmojis: {
      deep: true,
      handler(val) {
        if (!val.length) {
          this.$emit("none");
        }
      }
    }
  }
};
</script>

<style lang="sass">
.emoji-popup
	@font-face { font-family: "EmojiSymbols"; src: url('/fonts/EmojiSymbols-Regular.woff') format('woff'); text-decoration: none; font-style: normal; }
	position: absolute
	z-index: 99
	width: fit-content
	max-width: 200px
	max-height: 200px
	overflow-y: auto
	overflow-x: hidden
	display: flex
	align-items: center
	justify-content: center
	flex-wrap: wrap
	bottom: 40px
	min-height: 30px
	min-width: 30px
	box-shadow: 0 0 2px black
	font-size: 1.5rem
	background-color: white
	margin-left: 5px
	span
		cursor: pointer
		margin: 2px
		&:hover
			background-color: #F5F5F5
</style>
