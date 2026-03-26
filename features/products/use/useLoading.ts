import { ref } from "vue"

export function useLoading() {
	const isLoading = ref(false)

	const updateLoadingStatus = () => (isLoading.value = !isLoading.value)

	return {
		isLoading,
		updateLoadingStatus,
	}
}
