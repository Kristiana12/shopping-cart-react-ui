import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import ShoppingListItem from './ShoppingListItem';

const ShoppingList = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://fakestoreapi.com/products?limit=4');
      const products = await res.json();
      setData(products);
      setIsLoading(false);
      console.log(products);
    };

    fetchData();
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {!isLoading &&
          data.map((product) => (
            <ShoppingListItem product={product} key={product.id} />
          ))}
      </Grid>
    </Container>
  );
};

export default ShoppingList;
