<template>
#gif-player
  .gif-player
    .source
      image(v-if="isGif"
      :src="src"
      autoplay='false')
      video(v-if="isVideo"
        :loop="loop != null"
        v-on:mouseover="play()"
        v-on:mouseout="pause()"
      )
        source(:src="src")

    .progress(v-if="isVideo"
      :style="{ width: progress * 100 + '%'}"
    )

    .controls(v-if="isVideo && controls != null")
      .statistics
        p {{currentTime}} / {{durationTime}}
      button.play(
        v-on:click="play") Play
      button.pause(
        v-on:click="pause") Pause
      button.reset(
        v-on:click="reset") Reset


gif-player(
  loop
  controls
  src="https://zippy.gfycat.com/DazzlingFineBushbaby.webm"
)
//- gif-player(src="https://fat.gfycat.com/DazzlingFineBushbaby.gif")
</template>

<style lang="sass">
.clear
  clearfix()

.gif-player
  display inline-block
  float left

.progress
  height 5px
  background-color green
</style>

<script>
function secondsToTime(seconds) {
  let d = Number(seconds)
  let h = Math.floor(d / 3600)
  let m = Math.floor(d % 3600 / 60)
  let s = Math.floor(d % 3600 % 60)
  return
    (h > 0 ? h + ':' : '')
    + (m > 0 ? (h > 0 && m < 10 ? '0' : '') + m + ':' : '0:')
    + (s < 10 ? '0' : '')
    + s
}

export default {
  id: 'gif-player',
  created() {
    this.isGif = !!this.src.match(/.gif$/)
    this.isVideo = !!this.src.match(/(.webm|.mp4)$/)
  },
  ready() {
    this.$e = $(this.$el)
    this.$video = this.$e.find('video')
    this.video = this.$video.get(0)

    if (this.video) {
      this.video.addEventListener('loadedmetadata', () => {
        this.durationSeconds = this.video.duration
      })

      this.video.addEventListener('timeupdate', () => {
        this.currentSeconds = this.video.currentTime
      })
    }
  },
  data() {
    return {
      durationSeconds: 0,
      currentSeconds: 0,
      isGif: false,
      isVideo: false,
    }
  },
  props: {
    loop: String,
    controls: String,
    src: String,
  },
  methods: {
    play() { this.video.play() },
    pause() { this.video.pause() },
    reset() {
      this.video.currentTime = 0
      this.pause()
    },
    hover() {
      console.log('hover')
    }
  },
  computed: {
    currentTime() {
      return secondsToTime(this.currentSeconds)
    },
    durationTime() {
      return secondsToTime(this.durationSeconds)
    },
    progress() {
      return (this.currentSeconds / this.durationSeconds).toFixed(2)
    }
  }
})

</script>
