export class NoSubscriberError extends Error {
	public eventName: string
	constructor(eventName: string) {
		super()
		this.eventName = eventName
	}
}

export class NoEventError extends Error {}
