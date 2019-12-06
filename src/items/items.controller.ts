import {Body, Controller, Delete, Get, Param, Post,Put} from '@nestjs/common';
  import { ItemsService } from './items.service';
  import { Items } from '../items';
  import { Item } from '../item';
  
  @Controller('items')
  export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}
  
    @Get()  //Get all items
    async findAll(): Promise<Items> {
      return this.itemsService.findAll();
    }
  
    @Get(':id') //Get a single item using an id parameter
    async find(@Param('id') id: number): Promise<Item> {
      return this.itemsService.find(id);
    }
  
    @Post() //Create and item
    create(@Body('item') item: Item) {
      this.itemsService.create(item);
    }
  
    @Put()  //Update an item
    update(@Body('item') item: Item) {
      this.itemsService.update(item);
    }
  
    @Delete(':id')  //Delete an item using id parameter
    delete(@Param('id') id: number) {
      this.itemsService.delete(id);
    }
  }