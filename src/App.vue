<script setup lang="ts">
import { AsyncLogger } from "../config/logger/AsyncLogger"

AsyncLogger.log()
</script>

<template>
	<router-view />
</template>
