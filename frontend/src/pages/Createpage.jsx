import {
  Box, Button, Container, Heading, Input, useColorModeValue,
  useToast, VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({ name: '', price: '', image: '' });
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const handleAddProduct = async () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      toast({ title: 'Please fill all fields', status: 'warning', duration: 3000, isClosable: true });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct),
      });
      const data = await res.json();

      if (data.success) {
        toast({ title: 'Product created!', status: 'success', duration: 3000, isClosable: true });
        setNewProduct({ name: '', price: '', image: '' });
        navigate('/');
      } else {
        toast({ title: data.message, status: 'error', duration: 3000, isClosable: true });
      }
    } catch {
      toast({ title: 'Something went wrong', status: 'error', duration: 3000, isClosable: true });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxW="550px" py={12}>
      <VStack spacing={8}>
        <Heading
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
          fontSize="3xl"
        >
          Create New Product
        </Heading>

        <Box
          w="full"
          bg={bg}
          p={8}
          borderRadius="xl"
          border="1px solid"
          borderColor={borderColor}
          boxShadow="lg"
        >
          <VStack spacing={4}>
            <Input
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              focusBorderColor="blue.400"
            />
            <Input
              placeholder="Price (e.g. 29.99)"
              type="number"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              focusBorderColor="blue.400"
            />
            <Input
              placeholder="Image URL"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              focusBorderColor="blue.400"
            />
            <Button
              colorScheme="blue"
              w="full"
              onClick={handleAddProduct}
              isLoading={loading}
              loadingText="Creating..."
            >
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;