import type { ILogger } from "./lib"

class RemoteLogger implements ILogger {
	private remoteLoggerUrl: string = import.meta.env.VITE_REMOTE_LOGGER_URL!

	async log(
		level: "INFO" | "ERROR" | "WARNING" | "DEFAULT",
		logEntry: string
	): Promise<void> {
		const requestBody = {
			level: level,
			entry: logEntry,
		}

		await fetch(this.remoteLoggerUrl, {
			method: "POST",
			body: JSON.stringify(requestBody),
		})
	}
}

export default RemoteLogger
