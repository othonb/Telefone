import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaTelefoneComponent } from './edita-telefone.component';

describe('EditaTelefoneComponent', () => {
  let component: EditaTelefoneComponent;
  let fixture: ComponentFixture<EditaTelefoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaTelefoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaTelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
