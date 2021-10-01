<template>
    
    <ttodoform v-on:createToDo="createToDo" />
    <div class="container-md">
        <div class="page-list">
            <h3 class="pl-title justify-content-between" v-on:click="toDoShow=!toDoShow" v-bind:class="{open:toDoShow}">
                <div class="left">
                    Offen
                    <span class="badge bg-secondary pl-num">{{ todos.length }}</span>
                </div>
                <div class="right">
                    <span class="chevron-toggle">
                        <fa icon="chevron-down" v-if="!toDoShow"/>
                        <fa icon="chevron-up" v-if="toDoShow" />
                    </span>
                </div>
            </h3>
            <div class="todo-elements" v-if="toDoShow">
                <div v-for="$todo in todos" v-bind:key="$todo.id">
                    <ttodo v-bind:todo="$todo" v-on:update="update"/>
                </div>
            </div>
        </div>

        <hr>
        
        <div class="page-list">
            <h3 class="pl-title justify-content-between" v-on:click="toDoDoneShow=!toDoDoneShow"  v-bind:class="{open:toDoDoneShow}">
                <div class="left">
                    Erledigt
                    <span class="badge bg-secondary pl-num">{{ todosdone.length }}</span>
                </div>
                <div class="right">
                    <span class="chevron-toggle">
                        <fa icon="chevron-down" v-if="!toDoDoneShow"/>
                        <fa icon="chevron-up" v-if="toDoDoneShow" />
                    </span>
                </div>
            </h3>
            <div class="todo-elements" v-if="toDoDoneShow">
                <div v-for="$todo in todosdone" v-bind:key="$todo.id">
                    <ttodo v-bind:todo="$todo"  v-on:update="update"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import ttodo from '../components/ttodo.vue'
import ttodoform from '../components/ttodoform.vue'
import { Eventping } from '../interfaces/eventping'
import { Todo } from '../interfaces/todo'
import LocalStorageService from '../services/localstorage.service'

const lss = new LocalStorageService();

export default({
    name: "tpagelist",
    components: {
        ttodo,
        ttodoform
    },
    data(){
        return {
            toDoShow: true,
            toDoDoneShow: false,
            todos: lss.getTodos(false),
            todosdone: lss.getTodos(true)
        }
    },
    methods: {
        update(event: Eventping): void{
            if( 'check' === event.label){
                if(!event.object.status){
                    this.todosdone.splice(this.todosdone.indexOf(event.object), 1);
                    this.todos.push(event.object);
                }else{
                    this.todos.splice(this.todos.indexOf(event.object), 1);
                    this.todosdone.push(event.object);
                }
                lss.editTodo(event.object.id, event.object.label, event.object.status);
            }
            if( 'delete' === event.label) {
                if(event.object.status) {
                    this.todosdone.splice(this.todosdone.indexOf(event.object), 1);
                }else{
                    this.todos.splice(this.todos.indexOf(event.object), 1);
                }
                lss.removeTodo(event.object.id);
            }
            if ('label' === event.label) {
                if (event.object.status) {
                    this.todosdone.forEach((toDo: Todo) => {
                        if(toDo.id === event.object.id){
                            toDo.label = event.object.label;
                            lss.editTodo(event.object.id, event.object.label, event.object.status);
                        }
                    });
                } else {
                    this.todos.forEach((toDo: Todo) => {
                        if (toDo.id === event.object.id) {
                        toDo.label = event.object.label;
                        lss.editTodo(event.object.id, event.object.label, event.object.status);
                        }
                    });
                }
            }
        },
        createToDo(obj: Todo):void{
            this.todos.push(obj); 
            lss.addTodo(obj.label, obj.status);
        }
    }
})

</script>

<style lang="sass" scoped>
    @import '@/sass/var.sass'

    .page-list
        margin: 50px 0px

        .pl-title
            font-size: 3rem
            margin-bottom:25px
            letter-spacing: 1px
            cursor: pointer
            transition: all 250ms ease-in-out
            border-radius: 25px
            padding: $cube*2
            display: flex
            border: 5px solid
            border-color: $blue4

            .chevron-toggle
                padding-right: $cube*2
                width: 100%
                text-align:right

            .left
                span
                    color: $white

        .pl-title:hover
            background: $blue2
            border-color: $blue2
        .pl-title.open
            background: $blue2
            border-color: $blue2

</style>
