import { ComponentFixture, TestBed } from "@angular/core/testing"

import { MolHeaderComponent } from "./mol-header.component"

describe("MolHeaderComponent", () => {
	let component: MolHeaderComponent
	let fixture: ComponentFixture<MolHeaderComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MolHeaderComponent]
		}).compileComponents()

		fixture = TestBed.createComponent(MolHeaderComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it("should create", () => {
		expect(component).toBeTruthy()
	})
})
