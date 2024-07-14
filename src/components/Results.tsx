import React from 'react';
import { ListGroup } from 'react-bootstrap';

interface ResultsProps {
  books: any[];
}

const Results: React.FC<ResultsProps> = ({ books }) => {
  return (books ? (
    <ListGroup>
      {books.map((book, index) => (
        <ListGroup.Item key={index}>
          <h5>{book.title}</h5>
          <p>Author(s): {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
          <p>First Published: {book.first_publish_year}</p>
          <p>ISBN: {book.isbn ? book.isbn[0] : 'N/A'}</p>
          <p>Number of Pages: {book.number_of_pages_median}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>) : <></>
  );
};

export default Results;
