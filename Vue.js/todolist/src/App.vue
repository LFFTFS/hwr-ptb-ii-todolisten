<template>
  <div>
    <theader/>
    <main class="flex-header content-main container-fluid">
      <tpagelist/>
    </main>
  </div>
</template>

<script>
import theader from './components/theader.vue'
import tpagelist from './components/tpagelist.vue'

export default {
  name: 'App',
  components: {
    theader,
    tpagelist
  }
}
</script>

<style lang="sass">
  @font-face
    font-family: "Lato"
    src: local("Lato"), url('./fonts/Lato/Lato-Regular.ttf') format("truetype")
    font-weight: normal

  @font-face
    font-family: "Lato"
    src: local("Lato"), url('./fonts/Lato/Lato-Bold.ttf') format("truetype")
    font-weight: bold

  @font-face
    font-family: "NotoSansJP"
    src: local("NotoSansJP"), url('./fonts/Noto_Sans_JP/NotoSansJP-Regular.otf') format("opentype")
    font-weight: normal

  @font-face 
    font-family: "NotoSansJP"
    src: local("NotoSansJP"), url('./fonts/Noto_Sans_JP/NotoSansJP-Bold.otf') format("opentype")
    font-weight: bold

  @import '@/sass/var.sass'

  ::selection
    background-color: $white
    color: $dark1
    border-color: $dark1

  *
    box-sizing: border-box
    
  body, html
    margin: 0
    padding: 0
    font-size: 10px
    background-color: $white
    color: $dark1
    font-weight: normal
    font-family: $font2 !important

  main.content-main
    position: relative
    min-height: 20vh
    background-color: $white
    font-size:2rem
    font-family: $font2

</style>
