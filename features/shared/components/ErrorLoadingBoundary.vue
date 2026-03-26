<script setup lang="ts">
interface IErrorLoadingBoundary {
	isLoading: boolean
	isError: boolean
}

const { isLoading, isError } = defineProps<IErrorLoadingBoundary>()
</script>

<template>
	<div v-if="isLoading">
		<slot name="loadingFallback"></slot>
	</div>
	<div v-else>
		<div v-if="isError">
			<slot name="errorFallback"></slot>
		</div>
		<div v-else>
			<slot name="content"></slot>
		</div>
	</div>
</template>
