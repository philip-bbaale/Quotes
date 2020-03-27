import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteQuoteComponent } from './write-quote.component';

describe('WriteQuoteComponent', () => {
  let component: WriteQuoteComponent;
  let fixture: ComponentFixture<WriteQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
