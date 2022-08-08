import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvellousNgifComponent } from './marvellous-ngif.component';

describe('MarvellousNgifComponent', () => {
  let component: MarvellousNgifComponent;
  let fixture: ComponentFixture<MarvellousNgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvellousNgifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvellousNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
