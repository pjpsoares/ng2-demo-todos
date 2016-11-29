import { Injectable } from '@angular/core';

@Injectable()
export class TodosService {

  constructor() { }

  get() {
    return [
      {
        description: 'some desc',
        date: new Date()
      },
      {
        description: 'some desc 2',
        date: new Date()
      }
    ]
  }
}
