<template>
  <div>
    <h1>TodoList</h1>
    <input type="checkbox" v-model="allComplete" />
    <input v-model="msg" @keypress.enter="add" />
    <article v-for="(item) in showState==1?list:showState==2?list1:list2" :key="item.id">
      <input type="checkbox" v-model="item.completed" />
      <span>{{ item.msg }}</span>
      <button @click="remove(item.id)">X</button>
    </article>
    <footer>
      <span>{{ leftNumber }}items left</span>
      <button :disabled="showState==1" @click="setState(1)">all</button>
      <button :disabled="showState==2" @click="setState(2)">active</button>
      <button :disabled="showState==3" @click="setState(3)">completed</button>
      <button v-if="leftNumber != list.length" @click="removeCompleted">
        clear completed
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      msg: "",
      list: [],
      allComplete: false,
      showState:1
    };
  },
  methods: {
    add() {
      if (!this.msg) return;
      let tmp = {
        msg: this.msg,
        completed: false,
        id:Date.now()
      };
      this.list.push(tmp);
      this.msg = "";
    },
    remove(key) {
      this.list = this.list.filter((item) => item.id != key);
    },
    removeCompleted() {
      this.list = this.list.filter((item) => item.completed == false);
      if(this.list.length==0){
        this.allComplete=false
      }
    },
    setState(val){
      this.showState=val
    }
  },
  watch: {
    allComplete(val) {
      this.list = this.list.map((item) => {
        return {
          ...item,
          completed: val,
        };
      });
    },
  },
  computed: {
    leftNumber() {
      return this.list.filter((item) => item.completed == false).length;
    },
    list1() {
      return this.list.filter((item) => item.completed == false);
    },
    list2() {
      return this.list.filter((item) => item.completed == true);
    }
  },
};
</script>

