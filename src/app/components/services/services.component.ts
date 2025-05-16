import { Component } from '@angular/core';
import { ItemService } from './product.service';

@Component({
    selector: 'app-services',
    imports: [],
    templateUrl: './services.component.html',
    styleUrl: './services.component.scss'
})
export class ServicesComponent{
    constructor(private itemService: ItemService) {
        console.log("AppComponent constructor called");
    }

    itemData: {
        id: number;
        name: string;
        price: number;
    }[] | undefined;

    getItemData() {
        this.itemData = this.itemService.getItems();
        console.log('Product Data', this.itemData);

    }
}
