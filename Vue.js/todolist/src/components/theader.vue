<template>
    <div class="header">

        <!--inner container-->
        <div class="inner-header flex-header">
            <div class="logo">
                <fa icon="clipboard-check" />
            </div>
            <h1>MyTodoList</h1>
        </div>

        <!--Wellen Start-->
        <div>
            <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="parallax">
                    <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                    <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                    <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                    <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
            </svg>
        </div>
        <!--Wellen Ende-->

    </div>
</template>

<script>
export default({
    name: "theader"
})
</script>

<style lang="sass" scoped>
@import '@/sass/var.sass'

.header
    position: relative
    text-align: center
    background: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%)
    color: white

    h1
        font-weight: 300
        letter-spacing: 2px
        font-size: 48px

    p
        letter-spacing: 1px
        font-size: 14px
        color: #333333
    
    .logo
        width: 50px
        fill: white
        padding-right: 15px
        display: inline-block
        vertical-align: middle
        font-size: 6.6rem

    .inner-header
        height: 65vh
        width: 100%
        margin: 0
        padding: 0

    .flex-header
        display: flex
        justify-content: center
        align-items: center
        text-align: center

    .waves
        position: relative
        width: 100%
        height: 15vh
        margin-bottom: -7px

        /*Fix for safari gap
        min-height: 100px
        max-height: 150px
    
    /* Animation */

    .parallax > use
        animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite

        &:nth-child(1)
            animation-delay: -2s
            animation-duration: 7s

        &:nth-child(2)
            animation-delay: -3s
            animation-duration: 10s

        &:nth-child(3)
            animation-delay: -4s
            animation-duration: 13s

        &:nth-child(4)
            animation-delay: -5s
            animation-duration: 20s

@keyframes move-forever
    0%
        transform: translate3d(-90px, 0, 0)

    100%
        transform: translate3d(85px, 0, 0)
</style>