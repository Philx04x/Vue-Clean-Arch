<template>
	<h1>404 - Seite nicht gefunden</h1>
	<p>Die Adresse "{{ $route.params.pathMatch }}" existiert nicht.</p>
	<router-link to="/">Zurück nach Hause</router-link>
</template>
