import { useRef } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";

const imageArrOne = [
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
];

const imageArrTwo = [
  "https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
];

const imageArrThree = [
  "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1503&q=80",
  "https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1559&q=80",
  "https://images.unsplash.com/photo-1478827387698-1527781a4887?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
];

export default function IndexPage() {
  const galleryContainer = useRef(null);
  return (
    <Box mt="3">
      <Flex direction="column" gap="4em" justify="center" m="auto" mb="5">
        <Heading textAlign="center">
          Next/image lazyRoot Horizontal Scrolling
        </Heading>

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
          <Heading size="md" textAlign="center">
            lazyRoot loading
          </Heading>
          <Flex gap="0.6em" overflowX="scroll" ref={galleryContainer}>
            {imageArrOne.map((src) => (
              <Box m="auto" minW="100%" key={src}>
                <Image
                  src={src}
                  alt="horizontal scroll"
                  quality="100"
                  objectFit="cover"
                  width="400"
                  height="300"
                  layout="responsive"
                  lazyRoot={galleryContainer}
                />
              </Box>
            ))}
          </Flex>
        </Box>

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
          <Heading size="md" textAlign="center">
            Priority Loading
          </Heading>
          <Flex gap="0.6em" overflowX="scroll">
            {imageArrTwo.map((src) => (
              <Box m="auto" minW="100%" key={src}>
                <Image
                  src={src}
                  alt="horizontal scroll"
                  quality="100"
                  objectFit="cover"
                  width="600"
                  height="450"
                  layout="responsive"
                  //priority only on second box, working appropriately
                  priority="true"
                />
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
