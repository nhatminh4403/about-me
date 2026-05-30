import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowBg } from './glow-bg';

describe('GlowBg', () => {
  let component: GlowBg;
  let fixture: ComponentFixture<GlowBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlowBg],
    }).compileComponents();

    fixture = TestBed.createComponent(GlowBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
