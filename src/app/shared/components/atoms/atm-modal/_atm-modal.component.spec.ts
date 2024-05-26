import { ComponentFixture, TestBed } from "@angular/core/testing"

import { AtmModalComponent } from "./_atm-modal.component"

describe("AtmModalComponent", () => {
	let component: AtmModalComponent
	let fixture: ComponentFixture<AtmModalComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AtmModalComponent]
		}).compileComponents()

		fixture = TestBed.createComponent(AtmModalComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it("should create", () => {
		expect(component).toBeTruthy()
	})
})
