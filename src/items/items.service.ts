import { Injectable } from '@nestjs/common';
import { Item } from '../item';
import { Items } from '../items';

@Injectable()
export class ItemsService {
  private readonly items: Items = {
    1: {
      id: 1,
      name: 'Burger',
      price: 4.99,
      description: 'Tasty',
      image: 'https://prod-wolt-venue-images-cdn.wolt.com/5cb4c5c2691b47000d096c72/a7998b9ce62d2a20e5951c23178821b1',
    },
    2: {
      id: 2,
      name: 'Pizza',
      price: 7.99,
      description: 'Cheesy',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg',
    },
    3: {
      id: 3,
      name: 'Coffe',
      price: 1.49,
      description: 'Wake up your day',
      image: 'https://images.unsplash.com/photo-1515442261605-65987783cb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    },
  };

  findAll(): Items {
    return this.items;
  }

  create(newItem: Item) {
    const id = new Date().valueOf();
    this.items[id] = {
      ...newItem,
      id,
    };
  }

  find(id: number): Item {
    const record: Item = this.items[id];

    if (record) {
      return record;
    }

    throw new Error('No record found');
  }

  update(updatedItem: Item) {
    if (this.items[updatedItem.id]) {
      this.items[updatedItem.id] = updatedItem;
      return;
    }

    throw new Error("No record found to update");
  }

  delete(id: number) {
    const record: Item = this.items[id];

    if (record) {
      delete this.items[id];
      return;
    }

    throw new Error('No record found to delete');
  }
}