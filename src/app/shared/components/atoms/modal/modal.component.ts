import { Component, ElementRef, Input } from "@angular/core"

import { ModalService } from "@src/app/services"

@Component({
	selector: "atm-modal",
	templateUrl: "./modal.component.html",
	styleUrl: "./modal.component.scss"
})
export class ModalComponent {
	@Input() id!: string
	@Input() canClose: boolean = true

	constructor(
		public modalService: ModalService,
		private elementRef: ElementRef<HTMLElement>
	) {}

	get $isOpen() {
		return this.modalService.$isOpen(this.id)
	}

	close = () => this.modalService.close(this.id)

	handleOverlayClick(event: MouseEvent) {
		const target = event.target as HTMLElement
		const modalContent = this.elementRef.nativeElement.querySelector(
			".modal-content"
		) as HTMLElement
		if (!modalContent.contains(target)) {
			this.close()
		}
	}
}
