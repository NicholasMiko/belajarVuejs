<template>
  <!-- <h1>TO DO LIST</h1>
  <div class="form">
    <input
      type="text"
      v-model="input"
      placeholder="Ketik disini..."
      >
    <button
    class="tambahin" 
    @click="tambah">
      Tambah
    </button>

    <button
    @click="clear">
    Clear
    </button>

  <div v-for="(addr, i) in addresses" :key="i">
  <input type="text" v-model="addresses[i]" :placeholder="`Alamat`">
  <button @click="addresses.splice(i, 1)">✕</button>
  </div>  
  <button @click="addresses.push('')">+ Tambah Alamat</button>
  </div>
  <ul>
    <li
      v-for="(todo, index) in todos"
      :key="index"
      :class="{ selesai: todo.done, hapus: todo.deleted}"
      >
      <input
       type="checkbox"
       v-model="todo.done"
       :disabled="todo.deleted"
      >
      <span>
        {{index+1}}, {{ todo.task }}
      </span>
      
      <div v-for="(addr, i) in todo.addresses" :key="i"> {{ addr }}
      </div>

      <button
        class="hapusin"
        @click="hapus(index)"
      >
        Hapus
      </button>
    </li>
  </ul>

  <div>


  </div>

  <div 
    v-for="(person, index) in persons">
      <div style="background-color: aqua;">
        <h1 style="text-align: left;">{{ person.name }}</h1>
        <div>{{ person.name }}</div>
        <div style="background-color: green;">{{ person.address }}</div>
        <div>{{ person.address }}</div>
        <div>{{ person.age }}</div>
        </div>
  </div>

<div v-for="(person, index) in persons">
  <div> {{ person.name }},</div> 
  <div v-for="(addr, index) in person.address"> 
  <div style="background-color: red;">{{index+1}}, {{ addr }},{{ person.name }},{{ person.age }}</div>
  </div>
</div> -->

<div v-for="(person, index) in persons" :key="index">
  <div style="background-color: aqua; margin-bottom: 50px;">
    <div><br>Orang Tua: {{ person.name }}</div>
    <div>Umur: {{ person.age }}</div>

    <div v-for="(addr, index) in person.address">
      <div style= "margin-bottom: 20px;"></div>
      <div>Alamat:{{ index+1 }}, {{ addr }}</div>
    </div>

    <div v-for="(anak, index) in person.anak" :key="index">
      <div style= "margin-bottom: 20px;"></div>
      <div>Anak: {{ anak.name }}

      <input style="text"
          v-model="anak.inputHobby"
          placeholder="masukkan hobi..."
        >
      <button
      @click = "tambahHobi(anak)">
      Tambah Hobi
    </button>

      </div>
      <div>Sekolah: {{ anak.sekolah }}</div>
      <div v-for="(hobi, index) in anak.hobi" :key="index">
            Hobi: {{index+1}}, {{ hobi }}</div>
    </div>
  </div>
</div>
<hr />
  <!-- <pre>{{ persons }}</pre>
  <hr/>{{ persons[1]?.age }}

<div v-for="(car, u) in cars" :key="u">
       <div>{{ car.brand }}</div>
       <div>{{ car.type }}</div>
       <div>{{ car.color }}</div>
       <div>{{ car.year }}</div>
       <div>{{ car.condition }}</div>
       </div>

<div>{{ cars[0]?.color }}</div> -->

<!-- <div v-for="(anak,index) in anaks" :key="index">
  <div v-for="(hobi, index) in anak.hobi">{{ hobi }} </div>
    <div>{{ anak.name }}</div>
    <div>{{ anak.sekolah }}</div>
</div> -->

</template>
//setiap orang punya banyak anak, butuh ditampilkan anak-anaknya. Setiap anak-anaknya butuh info: nama, hobi (bisa lebih dari 1), nama sekolah 
<script setup lang="ts">
import { ref } from 'vue'

interface Todo {
  task: string;
  done: boolean;
  deleted: boolean;
  addresses: string[];
}

interface Person {
  name: string;
  age: number;
  address: string[];
  anak: Anak[];
}

interface Anak {
  name: string;
  hobi: string[];
  sekolah: string;
  inputHobby?: string;
}

interface Car {
brand: string;
type: string;
year: number;
color: string;
condition: string;


}
const cars = ref<Car[]>([
{
brand: 'Ferrari',
type: 'SF-90',
year: 2022,
color: 'Red',
condition: 'Used'
}


])


const input = ref('')
const todos = ref<Todo[]>([])

// const person = ref<Person>()
const persons = ref<Person[]>([
  {
    age: 50,
    name: 'oooooo',
    address: ['Tangerang', 'BSD'],
    anak: [
      {
        name: 'Rudi',
        hobi: ['Basket', 'Futsal', 'Volley'],
        sekolah: 'Penabur'
      },

      {
name: 'Jett',
hobi: ['Makan','Karaoke'],
sekolah: 'abc'
      },

      {
name: 'Phoenix',
hobi: ['Padel','Berenang'],
sekolah: 'def'

},

{

name: 'Skye',
hobi: ['Sleep', 'Jogging'],
sekolah: 'pqr'

}

    ]
  },
  {
    age: 23,
    name: 'miko',
    address: ['Jakarta', 'Karawaci'],
    anak: [
      {
        name: 'Ko Oscar',
        hobi: ['Valorant', 'Nonton'],
        sekolah: 'Ipeka'
      },

      {
name: 'Neon',
hobi: ['Masak','Bake'],
sekolah: 'ghi'
},

{
name: 'Cypher',
hobi: ['Shopping', 'Farming'],
sekolah: 'jkl'

},

{
name: 'Reyna',
hobi: ['Makeup', 'Camping'],
sekolah: 'mno'

}

    ]
  }
])

const anaks = ref<Anak[]>([
{
name: 'Rudi',
hobi: ['Basket', 'Futsal', 'Volley'],
sekolah: 'Penabur'
},

{
name: 'Ko Oscar',
hobi: ['Valorant', 'Nonton'],
sekolah: 'Ipeka'
},

{
name: 'Jett',
hobi: ['Makan','Karaoke'],
sekolah: 'abc'
},

{
name: 'Phoenix',
hobi: ['Padel','Berenang'],
sekolah: 'def'

},

{
name: 'Neon',
hobi: ['Masak','Bake'],
sekolah: 'ghi'

},

{
name: 'Cypher',
hobi: ['Shopping', 'Farming'],
sekolah: 'jkl'

},

{
name: 'Reyna',
hobi: ['Makeup', 'Camping'],
sekolah: 'mno'

},

{

name: 'Skye',
hobi: ['Sleep', 'Jogging'],
sekolah: 'pqr'


}



])


const addresses = ref<string[]>([])


const newHobi = ref('')

function tambahHobi(anak: Anak) {
  if (!anak.inputHobby) {
    return
  }
  anak.hobi.push(anak.inputHobby.trim())
  
  anak.inputHobby = ''
}


function tambah() {
  if (input.value.trim() === '') {
    return
  }
 todos.value.push({
    task: input.value,
    done: false,
    deleted: false,
    addresses: addresses.value.filter(a => a.trim() !== '')
})
  input.value = ''
}

 function hapus(index: number) {
  const todo = todos.value[index]
   if (todo) {
     todo.deleted = true
   }
}

const clear = () => {
  todos.value = []
}
</script>

<style scoped>
h1 {
  text-align: center;
}

li {
  background: lightgray;
  padding: 20px;
  width: 300px;
  margin: 20px auto;
  margin-top: 15px;
  border-radius: 15px;

  display: flex;
  align-items: center;
  gap: 12px;
}

.selesai {

background: lightgreen;

}

.selesai span{
  
     text-decoration: line-through;
  color: gray;
}


.form {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 20px 0;
}

input[type="text"] {
  width: 250px;
  padding: 15px;
  border-radius: 10px;
  border: 2px solid grey;
}

.tambahin {
  padding: px 30px;
  border: none;
  border-radius: 100px;
  background: green;
  color: white;
}

.hapusin {
  margin-left: auto;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  background: red;
  color: white;
}

.hapus {
  background: lightcoral;
  color: gray;
  text-decoration: line-through;
}
</style>
