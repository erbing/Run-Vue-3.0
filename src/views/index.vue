<template>
	<div>
		<span> Test pages </span> 
		<h3 @click="changeStore">{{stateTestA}}</h3>
		<test-comp :msg="getMsg"></test-comp>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { useStore } from 'vuex'
import TestComp from '../components/Test.vue';

export default defineComponent({
  name: 'Test',
	components: {
		'test-comp': TestComp
	},
	props: {},
	setup() {
		const store = useStore()
		const stateTestA = computed(() => store.state.testA);
		const getMsg = 'hahaha';
		onMounted(()=> {})
		return {
			stateTestA,
			getMsg
		}
	},
	changeStore() {
		console.log(333)
	}
})
</script>

