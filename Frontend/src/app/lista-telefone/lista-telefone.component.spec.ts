import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaTelefoneComponent } from './lista-telefone.component';

describe('ListaTelefoneComponent', () => {
  let component: ListaTelefoneComponent;
  let fixture: ComponentFixture<ListaTelefoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTelefoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
