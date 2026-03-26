import { Subscriber } from "./Subscriber"

import { NoEventError, NoSubscriberError } from "./errors"

export class EventService {
	private events = new Map<string, Set<Subscriber>>()

	constructor() {}

	addEvent(eventName: string) {
		this.events.set(eventName, new Set<Subscriber>())
	}

	addSubscriber(eventName: string, subscriber: Subscriber) {
		if (this.events.has(eventName) == false) {
			throw new NoEventError()
		}

		this.events.get(eventName)!.add(subscriber)
	}

	publishEvent(eventName: string, msg?: any) {
		const subscribers = this.events.get(eventName)

		if (subscribers == undefined) {
			throw new NoSubscriberError(eventName)
		}

		for (let subscriber of subscribers) {
			subscriber.notify(msg)
		}
	}
}
