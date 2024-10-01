export type Properties<T extends object> = {
	-readonly [P in keyof T as P extends `_${string}` // Exclude properties starting with an underscore
		? never
		: T[P] extends (...args: unknown[]) => unknown // Exclude properties that are functions
			? never
			: P]: T[P];
};
