import { Component } from "@angular/core"

import { SharedModule } from "@app/shared"

@Component({
	selector: "app-login",
	standalone: true,
	imports: [SharedModule],
	templateUrl: "./_login.component.html",
	styleUrl: "./_login.component.scss"
})
export class LoginComponent {}
