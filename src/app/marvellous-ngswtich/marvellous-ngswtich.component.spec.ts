import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvellousNgswtichComponent } from './marvellous-ngswtich.component';

describe('MarvellousNgswtichComponent', () => {
  let component: MarvellousNgswtichComponent;
  let fixture: ComponentFixture<MarvellousNgswtichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvellousNgswtichComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvellousNgswtichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
