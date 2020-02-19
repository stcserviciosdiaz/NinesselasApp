import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListFigurantePage } from './listFigurante.page';

describe('ListFigurantePage', () => {
  let component: ListFigurantePage;
  let fixture: ComponentFixture<ListFigurantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListFigurantePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListFigurantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
