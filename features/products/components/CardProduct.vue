<script setup lang="ts">
import { inject } from "vue"
import type { IProduct } from "../entities/entities"
import { COLOR_SYMBOL } from "../di/di"

const { product } = defineProps<{ product: IProduct }>()

// Hole hier DI raus
const data = inject(COLOR_SYMBOL)

if (data) {
	data.value = "red"
}
</script>

<template>
	<div class="flex items-center justify-center gap-x-5">
		<div class="w-1/2">
			<img
				:src="product.image"
				height="563px"
				width="443px"
				lazy="true"
			/>
		</div>

		<div class="w-1/2 gap-y-2 flex-col items-start">
			<p class="text-xl">{{ product.title }}</p>
			<p class="text-sm text-gray-400">{{ product.category }}</p>

			<p class="text-xl font-bold">{{ product.price }}€</p>
		</div>
	</div>
</template>
