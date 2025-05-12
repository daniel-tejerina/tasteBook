import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderRecipes',
  standalone: false
})
export class OrderRecipesPipe implements PipeTransform {

  transform(
    value: Array<any>, 
    property: string | null = null,
    sort: "asc" | "desc" = "asc"
  ): any[] {
    if(!property || !Array.isArray(value)) return value;

    const sorted = [...value].sort((a, b) => {
      const valA = a[property];
      const valB = b[property];

      if (typeof valA === "number" && typeof valB) {
        return valA - valB;
      }

      return String(valA).localeCompare(String(valB));
    })


    return sort === "asc" ? sorted : sorted.reverse();
  }

}
