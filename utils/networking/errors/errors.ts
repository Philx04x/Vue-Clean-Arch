export class HttpError extends Error {
	public message: string
	public displyMessage: string
	public status?: number
	public statusText?: string

	constructor(
		message: string,
		displyMessage: string,
		status?: number,
		statusText?: string
	) {
		super(message)
		this.name = "HttpError"
		this.message = message
		this.displyMessage = displyMessage
		this.status = status
		this.statusText = statusText
	}
}
