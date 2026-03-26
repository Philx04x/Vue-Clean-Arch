import { EventBus } from "../../utils/bus/lib"

export const AsyncLogger = (function () {
	let subscriber = new EventBus.Subscriber((msg: string) => {
		console.log(msg)
	})

	EventBus.EventService.addEvent("log.info")
	EventBus.EventService.addSubscriber("log.info", subscriber)

	function log() {
		EventBus.EventService.publishEvent("log.info", "Moin")
	}

	return {
		log,
	}
})()
