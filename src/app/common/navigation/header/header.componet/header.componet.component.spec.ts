import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponetComponent } from './header.componet.component';

describe('HeaderComponetComponent', () => {
  let component: HeaderComponetComponent;
  let fixture: ComponentFixture<HeaderComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
