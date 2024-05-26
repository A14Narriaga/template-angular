import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"

import {
	AtmButtonComponent,
	AtmInputComponent,
	AtmLinkComponent,
	AtmModalComponent
} from "./components"

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
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
export class SharedModule {}
