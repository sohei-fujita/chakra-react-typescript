import { FC, ReactNode, memo } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  isDisabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, isDisabled = true, loading = true, onClick } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      isDisabled={isDisabled}
      onClick={onClick}
      isLoading={loading}
    >
      {children}
    </Button>
  );
});
