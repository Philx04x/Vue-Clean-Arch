<script setup lang="ts">
import type { IProduct } from "../entities/entities"

const { product } = defineProps<{ product: IProduct }>()
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
