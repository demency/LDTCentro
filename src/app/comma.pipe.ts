import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'commaPipe'})
export class CommaPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;

    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
}