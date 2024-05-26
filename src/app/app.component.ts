import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"

import { ModalService } from "./services"
import { AtmButtonComponent, AtmModalComponent } from "./shared/components"

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, AtmButtonComponent, AtmModalComponent],
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
