import { Component } from "@angular/core"

import { ThemeService } from "@app/services"
import { SharedModule } from "@app/shared"

@Component({
	selector: "app-dashboard",
	standalone: true,
	imports: [SharedModule],
	templateUrl: "./_dashboard.component.html",
	styleUrl: "./_dashboard.component.scss"
})
export class DashboardComponent {
	constructor(public themeService: ThemeService) {}
}
