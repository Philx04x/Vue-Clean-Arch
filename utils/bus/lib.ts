import { EventService } from "./EventService"
import { Subscriber } from "./Subscriber"

export const EventBus = (function () {
	const eventService = new EventService()

	return {
		EventService: eventService,
		Subscriber: Subscriber,
	}
})()
