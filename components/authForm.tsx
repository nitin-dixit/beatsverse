import { Box, Flex, Heading, Link, Stack } from "@chakra-ui/layout";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { auth } from "../lib/mutations";
import logo from "../public/logo.png";

const AuthForm = ({ mode }: { mode: "signin" | "signup" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
      <Flex minH="100vh" align="center" justify="center">
        <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
          <Stack align="center">
            <Image src={logo} height="120px" width="120px" />
            <Heading
              fontSize="4xl"
              bgGradient="linear(to-l,#833ab4, #fd1d1d,#fcb045)"
              bgClip="text"
              fontWeight="extrabold"
            >
              {mode === "signin" ? "Welcome to BeatsVerse!" : "Join BeatsVerse"}
            </Heading>
            <Text fontSize="lg" color="gray.600">
              {mode === "signin" ? "" : "sit, relax, enjoy ✌🏻"}
            </Text>
          </Stack>
          <Box rounded="lg" boxShadow="lg" p={8}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel color="gray.600">Email address</FormLabel>
                  <Input
                    autoComplete="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    width="370px"
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel color="gray.600">Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      autoComplete={
                        mode === "signin" ? "current-password" : "new-password"
                      }
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement h="full">
                      <Button
                        variant="ghost"
                        onClick={() => setShowPassword((showP) => !showP)}
                      >
                        {showPassword ? <BiShowAlt /> : <BiHide />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align="end"
                    justify="end"
                  >
                    <Text color="gray.600">
                      {mode === "signin"
                        ? "Not a member? "
                        : "Already a member? "}
                      <Link
                        color="blue.400"
                        href={mode === "signin" ? "/signup" : "/signin"}
                      >
                        {mode === "signin" ? "Sign Up" : "Log In"}
                      </Link>
                    </Text>
                  </Stack>
                  <Button
                    bgGradient="linear(to-l,#FF4E50, #F9D423)"
                    color="black"
                    _hover={{
                      bgGradient: "linear(to-l,#8A2387, #E94057,#F27121)",
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
