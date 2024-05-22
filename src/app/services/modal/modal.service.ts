import { Injectable } from "@angular/core"
import { BehaviorSubject, Observable } from "rxjs"

@Injectable({
	providedIn: "root"
})
export class ModalService {
	#isOpenMap: Map<string, BehaviorSubject<boolean>> = new Map<
		string,
		BehaviorSubject<boolean>
	>()

	#getIsOpenMapObservable(modalID: string): BehaviorSubject<boolean> {
		if (!this.#isOpenMap.has(modalID)) {
			this.#isOpenMap.set(modalID, new BehaviorSubject<boolean>(false))
		}
		return this.#isOpenMap.get(modalID)!
	}

	open(modalID: string) {
		this.#getIsOpenMapObservable(modalID).next(true)
	}

	close(modalID: string) {
		this.#getIsOpenMapObservable(modalID).next(false)
	}

	$isOpen(modalID: string): Observable<boolean> {
		return this.#getIsOpenMapObservable(modalID).asObservable()
	}
}
