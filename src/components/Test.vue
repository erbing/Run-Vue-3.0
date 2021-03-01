<template>
	<div>
		Test Comps Props: <span>{{ msg }}</span>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class Test extends Vue {
  private msg!: string

	private setUp() {
		console.log(123)
	}
}
</script>

