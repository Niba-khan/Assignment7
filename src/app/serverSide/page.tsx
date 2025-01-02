import React from 'react';

interface Book {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

async function fetchBooks(): Promise<Book[]> {
  try {
    const response = await fetch('https://simple-books-api.glitch.me/books/', {
      cache: 'no-store', 
    });
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
}

export default async function Books() {
  const books = await fetchBooks();

  return (
    <div className="min-h-screen flex flex-col items-center py-10 shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Book List</h1>

      {books.length === 0 ? (
        <p className="text-lg text-gray-500">No books available at the moment.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {books.map((book) => (
            <li
              key={book.id}
              className="p-4 border-b py-6 px-8 bg-white/80 shadow-black shadow-2xl rounded-lg"
            >
              <div>
                <h2 className="text-3xl font-semibold">{book.name}</h2>
                <p className="text-sm text-gray-600">Type: {book.type}</p>
              </div>
              <p className="text-sm text-gray-700">
                Available: {book.available ? 'Yes' : 'No'}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
