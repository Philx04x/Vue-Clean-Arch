export class Subscriber {
	private callback: (params?: any) => void

	constructor(callback: (params?: any) => void) {
		this.callback = callback
	}

	notify(params?: any) {
		this.callback(params)
	}
}
