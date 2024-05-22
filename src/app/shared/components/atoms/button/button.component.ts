import { Component, Input } from "@angular/core"

@Component({
	selector: "atm-button",
	templateUrl: "./button.component.html",
	styleUrl: "./button.component.scss"
})
export class ButtonComponent {
	@Input() text!: string
}
