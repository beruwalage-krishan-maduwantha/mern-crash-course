import {
  Box, Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue,
} from '@chakra-ui/react';
import { AddIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'gray.800');
  const shadow = useColorModeValue('sm', 'dark-lg');

  return (
    <Box bg={bg} boxShadow={shadow} position="sticky" top={0} zIndex={10}>
      <Container maxW="1140px" px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Text
            fontSize={{ base: '20px', sm: '26px' }}
            fontWeight="bold"
            textTransform="uppercase"
            bgGradient="linear(to-r, cyan.400, blue.500)"
            bgClip="text"
          >
            <Link to="/">🛍️ Product Store</Link>
          </Text>

          <HStack spacing={3}>
            <Link to="/create">
              <Button colorScheme="blue" leftIcon={<AddIcon />} size="sm">
                Add Product
              </Button>
            </Link>
            <Button onClick={toggleColorMode} size="sm" variant="ghost">
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;