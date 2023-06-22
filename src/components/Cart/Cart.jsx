import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import styled from 'styled-components';

const Cart = () => {
  return (
    <StyledBox>
      <Stack sapcing={4}>
        <Box>
          <h3>Image</h3>
          <h4>Title of a product</h4>
          <p>204,73</p>
          <span>Add</span>
          <span>Num</span>
          <span>Rermove</span>
        </Box>
      </Stack>
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  position: fixed;
  background-color: #eee;
  min-height: 100vh;
  z-index: 100;
  top: 0;
  left: 100%;
  width: 100%;
  text-align: center;
`;

export default Cart;
