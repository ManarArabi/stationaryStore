import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryProductsPage } from './category-products.page';

describe('CategoryProductsPage', () => {
  let component: CategoryProductsPage;
  let fixture: ComponentFixture<CategoryProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryProductsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
