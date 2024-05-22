import { Component } from "@angular/core"

import { ModalService } from "./services"

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss"
})
export class AppComponent {
	title = "template-angular"

	constructor(public modalService: ModalService) {}

	handleOpenModal(modalID: string) {
		this.modalService.open(modalID)
	}

	handleCloseModal(modalID: string) {
		this.modalService.close(modalID)
	}
}
