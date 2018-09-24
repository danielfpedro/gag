import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemesAddComponent } from './memes-add.component';

describe('MemesAddComponent', () => {
  let component: MemesAddComponent;
  let fixture: ComponentFixture<MemesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
