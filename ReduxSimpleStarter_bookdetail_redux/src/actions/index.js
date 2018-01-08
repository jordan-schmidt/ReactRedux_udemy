export function selectBook(book) {
  // selectBook is an ActionCreator, returns action, object with type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
