import React, { useContext } from 'react';
import { Card, Icon, Image, Container } from 'semantic-ui-react';
import Context from '../context/Context';

import './Components.css';

function ProductCard() {
  const { results, web, category } = useContext(Context);

  const numberFormat = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);

  return (
    <Container fluid className="card-container">
      <Card.Group className="card-ui-container">
        { results.map((product, index) => (
          <Card
            key={ index }
            style={ {
              maxWidth: 200,
              margin: '20px 10px',
              boxShadow: '10px 10px 4px rgba(0, 0, 0, 10)',
            } }>

            <Image
              src={ product.thumbnail }
              wrapped
              ui={ true }
              size="small"
              centered
              // as = 'a'
            />

            <Card.Content>
              <Card.Header>{ product.title }</Card.Header>
              <Card.Meta>
                <span className='date'>Categoria: { category }</span>
              </Card.Meta>
              <Card.Description>
                { numberFormat(product.price) }
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href='@'>
                <Icon name='user' />
                { web }
              </a>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Container>
  )
};

export default ProductCard;
