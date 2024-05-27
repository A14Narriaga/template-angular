import { Component, Input } from "@angular/core"

@Component({
	selector: "atm-icon",
	standalone: true,
	imports: [],
	templateUrl: "./atm-icon.component.html",
	styleUrl: "./atm-icon.component.scss"
})
export class AtmIconComponent {
	@Input() name!: string
}
