import { expect } from "chai";
import { describe, it } from "mocha";
import { firstNames } from "../src/index"

describe("firstNames", () => {
	it("should return an array of strings", () => {
		const types = [...new Set(firstNames.map(firstName => typeof firstName))];

		expect(types).to.be.deep.equal(["string"]);
	});

	it("should not contain any duplicates", () => expect([...new Set(firstNames)]).to.be.deep.equal(firstNames));
});
