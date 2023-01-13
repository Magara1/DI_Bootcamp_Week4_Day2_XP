import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent {
Products =[
  {nom :'chaussures', prix:350},
  {nom :'chemise', prix:150},
  {nom :'montre', prix:550},
  {nom :'pantalon', prix:250},
  {nom :'chaussettes', prix:75}
]

ProductColor(prix:number){
  if (prix>300) {

    return 'highlightDirective'
    
  }
  return 'color'
}
}
