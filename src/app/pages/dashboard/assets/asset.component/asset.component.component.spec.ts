import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetComponentComponent } from './asset.component.component';

describe('AssetComponentComponent', () => {
  let component: AssetComponentComponent;
  let fixture: ComponentFixture<AssetComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
