import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PueblosEntornoComponent } from './pueblos-entorno.component';

describe('PueblosEntornoComponent', () => {
  let component: PueblosEntornoComponent;
  let fixture: ComponentFixture<PueblosEntornoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PueblosEntornoComponent]
    });
    fixture = TestBed.createComponent(PueblosEntornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
