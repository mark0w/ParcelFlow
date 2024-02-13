import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageAdministrationComponent } from './package-administration.component';

describe('PackageAdministrationComponent', () => {
  let component: PackageAdministrationComponent;
  let fixture: ComponentFixture<PackageAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackageAdministrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PackageAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
