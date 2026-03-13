import {
  Container, SimpleGrid, Text, VStack, Spinner, Center, Heading, Button,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      if (data.success) setProducts(data.data);
    } catch (err) {
      console.error('Failed to fetch products:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((p) => p._id !== id));
  };

  const handleUpdate = (updated) => {
    setProducts((prev) => prev.map((p) => (p._id === updated._id ? updated : p)));
  };

  if (loading) {
    return (
      <Center h="60vh">
        <Spinner size="xl" color="blue.500" thickness="4px" />
      </Center>
    );
  }

  return (
    <Container maxW="1140px" py={12}>
      <VStack spacing={8}>
        <Heading
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
          fontSize="3xl"
          textAlign="center"
        >
          Current Products 🚀
        </Heading>

        {products.length === 0 ? (
          <VStack spacing={4}>
            <Text fontSize="xl" color="gray.500">No products found.</Text>
            <Link to="/create">
              <Button colorScheme="blue">Add your first product</Button>
            </Link>
          </VStack>
        ) : (
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6} w="full">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            ))}
          </SimpleGrid>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;