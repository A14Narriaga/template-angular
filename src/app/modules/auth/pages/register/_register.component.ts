import { Component } from "@angular/core"

import { SharedModule } from "@app/shared"

@Component({
	selector: "app-register",
	standalone: true,
	imports: [SharedModule],
	templateUrl: "./_register.component.html",
	styleUrl: "./_register.component.scss"
})
export class RegisterComponent {}
