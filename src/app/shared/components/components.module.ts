import { NgModule } from "@angular/core"

import { AtomsModule } from "./atoms"
import { MoleculesModule } from "./molecules"

@NgModule({
	declarations: [],
	imports: [AtomsModule, MoleculesModule],
	exports: [AtomsModule, MoleculesModule]
})
export class ComponentsModule {}
