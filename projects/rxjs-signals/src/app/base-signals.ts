import { computed, effect, signal } from '@angular/core';

export function workWithSignals(): void {
  effect(() => {
    console.log(filteredProducts());
  });
  const products = signal([
    { name: 'Apple', category: 'Fruits' },
    { name: 'Carrot', category: 'Vegetables' },
    { name: 'Banana', category: 'Fruits' },
    { name: 'Broccoli', category: 'Vegetables' },
  ]);

  const selectedCategory = signal('Fruits');

  const filteredProducts = computed(() => {
    return products().filter(
      (product) => product.category === selectedCategory()
    );
  });

  setTimeout(() => {
    selectedCategory.set('Vegetables');
  }, 3000);
}
