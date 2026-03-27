<script setup lang="ts">
import { onMounted, provide, ref } from "vue"
import { getAllProducts } from "../api/product"
import { useLoading } from "../use/useLoading"
import CardProduct from "./CardProduct.vue"
import type { IApiResult } from "../../../utils/networking/entities/ApiResult"
import type { IProduct } from "../entities/entities"
import ErrorLoadingBoundary from "../../shared/components/ErrorLoadingBoundary.vue"
import { COLOR_SYMBOL } from "../di/di"
const { updateLoadingStatus } = useLoading()
const isError = ref(false)

let apiResult = ref<IApiResult<IProduct[]> | undefined>(undefined)

// Nehme hier DI vor
const color = ref("blue")
provide(COLOR_SYMBOL, color)

onMounted(async () => {
	updateLoadingStatus()

	try {
		apiResult.value = await getAllProducts()
		isError.value = apiResult.value.isError
	} catch (e: any) {
		isError.value = true
	}

	updateLoadingStatus()
})
</script>

<template>
	<div class="flex-col items-center justif-center border-2 h-full">
		<ErrorLoadingBoundary :isLoading="false" :isError="isError">
			<template v-slot:loadingFallback>
				<p class="text-xl text-black">Lade die Produkte</p>
			</template>

			<template v-slot:errorFallback>
				<p class="text-xl text-black">Fehler mit den Produkten</p>
			</template>

			<template v-slot:content>
				<div v-if="apiResult && !apiResult.isError && apiResult.data">
					<CardProduct
						v-for="product in apiResult.data"
						:key="product.id"
						:product="product"
					/>
				</div>
			</template>
		</ErrorLoadingBoundary>
	</div>
</template>
