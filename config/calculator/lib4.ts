var mySingletonObject = (function () {
	let name = "Philipp"
	let lastName = "Volkmer"

	function doThis(x: number, y: number) {
		return x + y
	}

	return {
		doThis,
	}
})()

// Durch die Klammern am Ende wird die Funktion direkt ausgeführt
mySingletonObject.doThis(1, 2)
