import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionaTelefoneComponent } from './adiciona-telefone.component';

describe('AdicionaTelefoneComponent', () => {
  let component: AdicionaTelefoneComponent;
  let fixture: ComponentFixture<AdicionaTelefoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionaTelefoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionaTelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
