import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"

import { ButtonComponent, ModalComponent } from "./components"

@NgModule({
	declarations: [ButtonComponent, ModalComponent],
	imports: [CommonModule],
	exports: [ButtonComponent, ModalComponent]
})
export class SharedModule {}
