import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filter',
	pure: true
})
export class FilterPipe implements PipeTransform {
	transform(list: string[], search: string): string[] {
		console.log('FilterPipe called with search:', search);

		if (!search.trim()) return list;
		return list.filter((item) => item.toLowerCase().includes(search.toLowerCase()));
	}
}
