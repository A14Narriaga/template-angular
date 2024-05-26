import { Component } from "@angular/core"

import { ThemeService } from "@app/services"

@Component({
	selector: "mol-header",
	standalone: true,
	imports: [],
	templateUrl: "./mol-header.component.html",
	styleUrl: "./mol-header.component.scss"
})
export class MolHeaderComponent {
	constructor(public themeService: ThemeService) {}
}
