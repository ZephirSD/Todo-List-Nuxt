import { defineStore } from "pinia";
export const useTodosStore = defineStore({
  id: "todos",
  state: () => {
    return {
      donnees: [
        {
          text: "1Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          text: "2Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          text: "3Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
    };
  },
  actions: {
    addTodos(text: string){
        this.donnees.push({text});
    }
  },
});
