import { NgModule } from "@angular/core"

import { AtmButtonComponent } from "./atm-button"
import { AtmInputComponent } from "./atm-input"
import { AtmLinkComponent } from "./atm-link"
import { AtmModalComponent } from "./atm-modal"

@NgModule({
	imports: [
		AtmButtonComponent,
		AtmInputComponent,
		AtmModalComponent,
		AtmLinkComponent
	],
	exports: [
		AtmButtonComponent,
		AtmInputComponent,
		AtmModalComponent,
		AtmLinkComponent
	]
})
export class AtomsModule {}
