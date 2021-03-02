<template>
	<div>
		<h2>Test Comps Props: <span>{{ msg }}</span></h2>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { useStore } from 'vuex'

export default defineComponent({
  name: 'TestComp',
	components: {},
	props: {
		msg: {
			type: String,
			default: ''
		}
	},
	setup() {
		const store = useStore()
		const stateTestA = computed(()=>store.state.testA)
		onMounted(()=> {})
		return {
			stateTestA
		}
	},
	changeStore() {
		console.log(333)
	}
})
</script>

