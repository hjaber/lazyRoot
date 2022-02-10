import { Box } from "@chakra-ui/react";

function Card({ children }) {
  return (
    <Box
      maxW={{
        base: "95%",
        sm: "65%",
        md: "50%",
        lg: "40%",
        "2xl": "25%",
      }}
      minW={{
        base: "95%",
        sm: "65%",
        md: "50%",
        lg: "40%",
        "2xl": "25%",
      }}
      m="auto"
    >
      {children}
    </Box>
  );
}

export default Card;
