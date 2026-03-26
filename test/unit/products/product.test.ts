import { test, expect, assert } from "vitest"
import { getAllProducts } from "../../../features/products/api/product"

test("fetch product data", async () => {
	try {
		const response = await getAllProducts()

		if (response.isError == true) {
			assert.fail("api error")
		}

		if (response.data == undefined || response.data?.length < 1) {
			assert.fail("response error")
		}
	} catch {
		assert.fail("network error")
	}
})
