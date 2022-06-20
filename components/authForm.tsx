import { Box, Flex, Heading, Stack } from "@chakra-ui/layout";
import { FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { auth } from "../lib/mutations";
import logo from "../public/logo.png";

const AuthForm = ({ mode }: { mode: "signin" | "signup" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    await auth(mode, { email, password });
    setIsLoading(false);
    router.push("/");
  };

  return (
    <Box height="100vh" width="100vw" bg="black">
      <Flex
        minH="100vh"
        align="center"
        justify="center"
        // bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
          <Stack align="center">
            <Image src={logo} height="120px" width="120px" />
            <Heading fontSize="4xl">
              {mode === "signin"
                ? "Sign in to your account."
                : "Sign up for an account."}
            </Heading>
            <Text fontSize="lg" color="gray.600">
              to enjoy all of our cool features✌️
            </Text>
          </Stack>
          <Box
            rounded="lg"
            // bg={useColorModeValue("white", "gray.700")}
            boxShadow="lg"
            p={8}
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Button
                    marginTop="20px"
                    bg="yellow.300"
                    color="black"
                    _hover={{
                      bg: "yellow.400",
                    }}
                    type="submit"
                    isLoading={isLoading}
                  >
                    {mode === "signin" ? "Sign in" : "Sign up"}
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};
export default AuthForm;
