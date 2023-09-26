// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

type Session = {
	credentials: string | null
}

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			session: Session | null
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
