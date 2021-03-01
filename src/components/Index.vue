<template>
	<div>
		Index Comps Page
		<p>{{ msg }}</p>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class Index extends Vue {
  msg!: string
}
</script>

