import { Component, Input } from "@angular/core"

@Component({
	standalone: true,
	imports: [],
	selector: "atm-button",
	templateUrl: "./_atm-button.component.html",
	styleUrl: "./_atm-button.component.scss"
})
export class AtmButtonComponent {
	@Input() text!: string
}
