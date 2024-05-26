import { ComponentFixture, TestBed } from "@angular/core/testing"

import { AtmLinkComponent } from "./_atm-link.component"

describe("AtmLinkComponent", () => {
	let component: AtmLinkComponent
	let fixture: ComponentFixture<AtmLinkComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AtmLinkComponent]
		}).compileComponents()

		fixture = TestBed.createComponent(AtmLinkComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it("should create", () => {
		expect(component).toBeTruthy()
	})
})
