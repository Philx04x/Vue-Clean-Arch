import type { ILogger } from "./lib"

class LocalLogger implements ILogger {
	async log(
		level: "INFO" | "ERROR" | "WARNING" | "DEFAULT",
		logEntry: string
	): Promise<void> {
		switch (level) {
			case "INFO": {
				console.info(logEntry)
				break
			}
			case "WARNING": {
				console.warn(logEntry)
				break
			}
			case "ERROR": {
				console.error(logEntry)
				break
			}
			default: {
				console.log(logEntry)
				break
			}
		}
	}
}
export default LocalLogger
