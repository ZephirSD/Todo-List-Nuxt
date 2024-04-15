<template>
  <div>
    <section class="case_tache">
      <h1>Liste des tâches</h1>
      <h3>Ajouter une tâche à réaliser</h3>
      <div class="case_input_ajout">
        <input type="text" placeholder="Ajouter une nouvelle tâche" v-model="inputValue" class="input_tache"/>
        <button class="btn_ajout" @click="addTodos">Ajouter</button>
      </div>
      <div class="overflow-x-auto">
        <table class="table text-white">
          <tbody>
            <tr v-for="(todo, index) in donnees" :key="index">
              <th>
                <label>
                  <input type="checkbox" class="checkbox" v-model="checkTodo" :value="index" />
                </label>
              </th>
              <td>
                <div class="font-bold">{{ todo.text }}</div>
              </td>
  
              <th>
                <button class="btn btn-ghost btn-xs" @click="clickSuppr(index)">Supprimer</button>
              </th>
            </tr>
          </tbody>
        </table>
        <div>{{ checkTodo }}</div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useTodosStore } from '~/stores/todo';
import { storeToRefs } from "pinia";
import { ref } from 'vue';
const inputValue = ref('');
const checkTodo  = ref([]);
const todosStore = useTodosStore(); 
const { donnees } = storeToRefs(todosStore);
const addTodos = () => {
  if(inputValue.value != ""){
    todosStore.addTodos(inputValue.value);
    inputValue.value = "";
  }
}
const clickSuppr = (index) => {
  todosStore.supprTodos(index);
}
useHead({
  title: "Application de Todo List",
  meta: [
    { name: 'description', content: 'Application Web de Todo-List avec NuxtJS'}
  ]
})
</script>
