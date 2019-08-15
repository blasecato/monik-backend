import { Injectable } from '@nestjs/common';
import {Item} from './interfaces/item.interface'
@Injectable()
export class ItemsService {
    private readonly items: Item[]=[
        {
            id: '12345',
            name: 'item 1',
            qty: "100",
            description: "este es el item 1"
        },
        {
            id: '123456',
            name: 'item 2',
            qty: "101",
            description: "este es el item 2"
        },
        {
            id: '1234567',
            name: 'item 3',
            qty: "102",
            description: "este es el item 3"
        }
    ];
    findAll():Item[]{
        return this.items;
    }

    findOne(id: string): Item{
        return this.items.find(item => item.id === id);
    }
}
