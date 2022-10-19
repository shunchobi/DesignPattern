<template></template>

<script setup lang="ts">
import { registerRuntimeCompiler } from 'vue';


interface Aggregate {
    iterator(): Iterator;
}

interface Iterator{
    hasNext(): boolean;
    nextItem(): Object;
    hasReverseNext(): boolean;
    nextReverseItem(): object;
}

interface Book {
    getName(): string;
}

class BookStore implements Aggregate {
    private books: Book[] = [];
    private length: number = 0;

    iterator(): Iterator{
        return new BookStoreIterator(this);
    }
    getLenght(): number {
        return this.length;
    }
    getBookAt(index: number): Book {
        return this.books[index];
    }
    addBook(book: Book) {
        this.books.push(book);
        this.length++;
    }

}

class BookStoreIterator implements Iterator{
    private bookStore: BookStore;
    private index: number = 0;
    private calledReverse: boolean = false;

    constructor(bookStore: BookStore) {
        this.bookStore = bookStore;
    }

    hasNext(): boolean{
        return this.index < this.bookStore.getLenght()
    }
    nextItem(): Book{
        const book = this.bookStore.getBookAt(this.index);
        this.index++;
        return book;
    }
    hasReverseNext(): boolean{
        if (!this.calledReverse) {
            this.index = this.bookStore.getLenght() - 1;
            this.calledReverse = true;
        }
        return this.index >= 0;
    }
    nextReverseItem(): Book {
        const book = this.bookStore.getBookAt(this.index);
        this.index--;
        return book;
    }
}

class Book implements Book {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName(): string{
        return this.name;
    }
}

const onepeace = new Book('onepeace');
const spaceBrother = new Book('spaceBrother');

const bookStore = new BookStore();
bookStore.addBook(onepeace);
bookStore.addBook(spaceBrother);

const bookStoreIterator = bookStore.iterator();
while (bookStoreIterator.hasNext()) {
    const targetBook = bookStoreIterator.nextItem() as Book;
    console.log(targetBook.getName());
}

console.log('---reverse---');

while (bookStoreIterator.hasReverseNext()) {
    const targetBook = bookStoreIterator.nextReverseItem() as Book;
    console.log(targetBook.getName());
}

</script>