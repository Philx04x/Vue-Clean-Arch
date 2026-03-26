// Das ist aus dem Buch `Modular Programming with JavaScript`
// Ein Ansatz, um Module zu schreiben

export function Calculator() {
	let privateMember = 0

	// Die Funktion bleibt verborgen
	function privateFunction(): number {
		return 10
	}

	function publicFunction(): number {
		return privateFunction()
	}

	return {
		publicFunction,
	}
}

// Das sind statische Methoden
Calculator.doAction = function (x: number, y: number): number {
	return x + y
}

Calculator.doAction(10, 20)

// Hole die Methoden aus dem Objekt selbst
const { publicFunction } = Calculator()
