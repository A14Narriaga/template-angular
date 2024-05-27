import { NgModule } from "@angular/core"

import { AtmButtonComponent } from "./atm-button"
import { AtmIconComponent } from "./atm-icon"
import { AtmInputComponent } from "./atm-input"
import { AtmLinkComponent } from "./atm-link"
import { AtmModalComponent } from "./atm-modal"

@NgModule({
	imports: [
		AtmButtonComponent,
		AtmInputComponent,
		AtmModalComponent,
		AtmLinkComponent,
		AtmIconComponent
	],
	exports: [
		AtmButtonComponent,
		AtmInputComponent,
		AtmModalComponent,
		AtmLinkComponent,
		AtmIconComponent
	]
})
export class AtomsModule {}
