<template>
    <div class="todo" v-bind:class="{ done: todo.status }">
        <div class="todo-content">
            <div class="handle leftside-buttons">
                <fa icon="grip-vertical"/>
            </div>
            <div class="todo-content-check">
                <img src="../assets/svg/checkbox-empty.svg" v-if="!todo.status" v-on:click="changeCheck">
                <img src="../assets/svg/checkbox-done.svg" v-if="todo.status"  v-on:click="changeCheck">
            </div>
            <div class="todo-content-title">
                <input type="text" placeholder="Name des ToDo-Punkes" :value="todo.label" @input="changeLabel" v-on:blur="changeLabel" :disabled="todo.status">
            </div>
        </div>
        <div class="delete" v-on:click="deleteToDo">
            <span>
                <fa icon="trash"/>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { Eventping } from '../interfaces/eventping'
import { Todo } from '../interfaces/todo'

export default({
    name: "ttodo",
    props: ["todo"],
    methods: {
        changeCheck(){
            this.todo.status = !this.todo.status;
            const newObj: Todo = {
                id: this.todo.id,
                label: this.todo.label,
                status: this.todo.status
            }
            const eventObject: Eventping = {
                label: 'check',
                object: newObj
            };
            this.$emit("update", eventObject);
        },
        deleteToDo(){
            const newObj: Todo = {
                id: this.todo.id,
                label: '',
                status: this.todo.status
            }
            const eventObject: Eventping = {
                label: 'delete',
                object: newObj
            };
            this.$emit("update", eventObject);
        },
        changeLabel(e){
            const newObj: Todo = {
                id: this.todo.id,
                label: e.target.value,
                status: this.todo.status
            }
            const eventObject: Eventping = {
                label: 'label',
                object: newObj
            };
            this.$emit("update", eventObject);
        }
    }
})
</script>

<style lang="sass" scoped>
    @import '@/sass/var.sass'

    .todo
        width:100%
        background: $blue5
        margin: 0 0 $cube 0
        display: flex
        flex-flow: row
        justify-content: space-between
        align-items: stretch
        height:100%
        transition: all 120ms ease-in-out
        
        .todo-content
            width: 100%
            display: flex 
            flex-flow: row
            justify-content: flex-start 
            align-items: center

            .leftside-buttons
                height:100%
                display: flex
                flex-flow:row
                padding: $cube $cube*1.3
                justify-content: center
                align-items: center
                font-size: $cube*3
                transition: all 250ms ease-in-out
                fa-icon
                    svg
                        width: $cube*2
                        height: $cube*2
            
            .handle
                background-color: $blue1
                color: $dark2
                cursor: grab
            .handle:hover
                background: $blue2

            .info
                cursor: pointer
                color: $dark2
                padding-left: $cube*3
                padding-right: $cube*3
                // transition: transform 50ms ease-in-out
                transition: background 150ms ease-in-out
            .info:hover
                // transform: scale(1.1)
                background: $dark1
                color: $white2
            
            .todo-content-check
                display: flex
                margin: $cube*2
                margin-left: $cube
                flex-flow: row
                justify-content: center
                align-items: center
                cursor: pointer
                img
                    width: $cube*4
                    height: $cube*4
            
            .todo-content-title
                width: 100%
                input
                    font-size: $cube*2
                    padding: $cube*2
                    color: $dark1
                    width:100%
                    border: 0px
                    background: transparent
                    word-break: break-word
                input::placeholder
                    opacity: 0.5
                    font-style: italic
                input:focus
                    outline: none
            
        .delete
            background-color: $red2
            color: $white2
            font-size: $cube*3
            padding: $cube*2
            cursor: pointer
            transition: all 250ms ease-in-out
            span
                height: 100%
                width: 100%
                display:flex
                flex-flow: row
                justify-content: center
                align-items: center
        .delete:hover
            background:$dark1

    .todo:hover
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important
        background: $blue4

    .todo.done 
        .todo-content
            .handle
                display: none
            .todo-content-title
                opacity:0.3
                input
                    text-decoration: line-through

</style>