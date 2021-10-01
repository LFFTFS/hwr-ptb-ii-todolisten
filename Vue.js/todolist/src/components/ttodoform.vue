<template>
    
    <div class="container-md">
        <div class="row todo-form">
            <div class="todo-content col-11">
                <input type="text" placeholder="Neuen Todo-Punkt hinzufügen" v-on:keyup.enter="createToDo" v-model="todo.label">
            </div>
            <div class="create col-1" v-on:click="createToDo">
                <span>
                    <fa icon="plus"/>
                </span>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import { Todo } from '../interfaces/todo'

export default({
    name: "ttodoform",
    data(){
        return{
            todo: {
                id: 0,
                label: "",
                status: false
            }
        }
    },
    methods:{
        createToDo(){
            const thisTodo: Todo = {
                id: 0,
                label: this.todo.label,
                status: false
            }
            this.$emit("createToDo", thisTodo);
            this.todo = {
                id: 0,
                label: "",
                status: false
            }
        }
    }
})
</script>

<style lang="sass" scoped>
    @import '@/sass/var.sass'

    .todo-form
        margin:50px 0px
        justify-content: space-between
        align-items: stretch
        height: $cube*8
        display: flex
        width:100%
        flex-flow: row

        .todo-content
            font-size: $cube*2
            display: flex
            flex-flow: row
            justify-content: flex-start
            align-items: stretch 
            padding-left: 0px

            input[type=text]
                width: 100%
                padding: $cube*2
                color: $dark1
                background: $green5
                border: none
                word-break: break-word
                border-top-right-radius: 0px
                border-bottom-right-radius: 0px
                transition: all 250ms ease-in-out

            input::placeholder
                opacity:0.6
                font-style: italic
                color: $dark2
            input:focus
                outline: none
                background-color: $green4
            

        
        .create
            cursor: pointer
            padding: $cube*2
            font-size: $cube*3
            color: $white2
            background: $green1
            transition: all 250ms ease-in-out
            font-weight: bold

            span
                height:100%
                width:100%
                display: flex
                justify-content: center
                align-items: center
        .create:hover
            background: $dark1

</style>