import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"

import { ModalService } from "./services"
import { SharedModule } from "./shared"

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, SharedModule],
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
