import { Text, VStack } from '@chakra-ui/react';

interface OccurrenceCardProps {
  amount: number;
  title: string;
}

export function OccurrenceCard({ amount, title }: OccurrenceCardProps) {
  return (
    <VStack
      bg="white"
      rounded={12}
      py={5}
      px="5"
      flex="1"
      alignItems="start"
      h="full"
      w="full"
      boxShadow="lg"
    >
      <Text fontSize={34} fontWeight="bold" color="black">
        {amount}
      </Text>
      <Text fontSize={16} color="black">
        {title}
      </Text>
    </VStack>
  );
}
