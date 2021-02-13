import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { State, Item } from '@/store/store.interface';

Vue.use(Vuex);

const store: StoreOptions<State> = {
  state: {
    todoList: [
      {
        id: 0,
        title: "타입스크립트 공부",
        status: "active"
      },
      {
        id: 1,
        title: "TDD 공부",
        status: "clear"
      },
      {
        id: 2,
        title: "리액트 공부",
        status: "active"
      }
    ]
  },
  mutations: {
    addItem(state, item: Item) {
      state.todoList.push(item)
    },
    changeStatus(state, { id, status }: { id: number, status: 'active' | 'clear' }) {
      state.todoList[id].status = status;
    },
    removeItem(state, id: number) {
      state.todoList.splice(id, 1)
    }
  },
  actions: {
  },
  getters: {
    allTodoList: (state) => state.todoList,
    activeTodoList: (state: State) => {
      return state.todoList.filter((item: Item) => item.status === 'active')
    },
    clearTodoList: (state: State) => {
      return state.todoList.filter((item: Item) => item.status === 'clear')
    }
  }
}

export default new Vuex.Store(store);
