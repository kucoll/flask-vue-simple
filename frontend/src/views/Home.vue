<template>
 <div>
	<p> change Home.vue</p>
    <hello-world></hello-world>
    <p>Random number from backend: {{ randomNumber }}</p>
    <button @click="getRandom">New random number</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
      randomNumber: 0
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    getRandom() {
      this.randomNumber = this.get_random_from_back()
    },
    get_random_from_back() {
       const path = '/api/random'
      this.$http.get(path)
        .then(response => {
          this.randomNumber = response.data.randomNumber
        })
        .catch(error => {
           console.log(error)
        })
    }
  },
  created () {
    this.getRandom()
  }
}
</script>
