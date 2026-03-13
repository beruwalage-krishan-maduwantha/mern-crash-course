import {
  Box, Button, Heading, HStack, IconButton, Image, Text,
  useColorModeValue, useDisclosure, useToast,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter,
  ModalBody, ModalCloseButton, Input, VStack,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const ProductCard = ({ product, onDelete, onUpdate }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [updatedProduct, setUpdatedProduct] = useState({
    name: product.name,
    price: product.price,
    image: product.image,
  });

  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/products/${product._id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        toast({ title: 'Product deleted', status: 'success', duration: 3000, isClosable: true });
        onDelete(product._id);
      } else {
        toast({ title: data.message, status: 'error', duration: 3000, isClosable: true });
      }
    } catch {
      toast({ title: 'Something went wrong', status: 'error', duration: 3000, isClosable: true });
    }
  };

  const handleUpdate = async () => {
    try {
      const res = await fetch(`/api/products/${product._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProduct),
      });
      const data = await res.json();
      if (data.success) {
        toast({ title: 'Product updated!', status: 'success', duration: 3000, isClosable: true });
        onUpdate(data.data);
        onClose();
      } else {
        toast({ title: data.message, status: 'error', duration: 3000, isClosable: true });
      }
    } catch {
      toast({ title: 'Something went wrong', status: 'error', duration: 3000, isClosable: true });
    }
  };

  return (
    <>
      <Box
        bg={bg}
        borderRadius="xl"
        overflow="hidden"
        border="1px solid"
        borderColor={borderColor}
        boxShadow="md"
        transition="all 0.2s"
        _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
      >
        <Image
          src={product.image}
          alt={product.name}
          h="200px"
          w="full"
          objectFit="cover"
          fallbackSrc="https://via.placeholder.com/300x200?text=No+Image"
        />
        <Box p={4}>
          <Heading size="md" mb={1} noOfLines={1}>{product.name}</Heading>
          <Text fontSize="xl" fontWeight="bold" color="blue.500" mb={3}>
            ${Number(product.price).toFixed(2)}
          </Text>
          <HStack justify="flex-end">
            <IconButton icon={<EditIcon />} colorScheme="blue" variant="ghost" size="sm" onClick={onOpen} aria-label="Edit" />
            <IconButton icon={<DeleteIcon />} colorScheme="red" variant="ghost" size="sm" onClick={handleDelete} aria-label="Delete" />
          </HStack>
        </Box>
      </Box>

      {/* Edit Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder="Product Name"
                value={updatedProduct.name}
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
              />
              <Input
                placeholder="Price"
                type="number"
                value={updatedProduct.price}
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
              />
              <Input
                placeholder="Image URL"
                value={updatedProduct.image}
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleUpdate}>Save</Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductCard;