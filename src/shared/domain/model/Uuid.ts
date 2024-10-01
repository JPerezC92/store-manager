import * as crypto from 'node:crypto';

export class Uuid {
	private readonly _value: string;

	constructor(uuid: string) {
		this._value = uuid;
	}

	value(): string {
		return this._value;
	}

	static generate(): Uuid {
		return new Uuid(crypto.randomUUID());
	}
}
