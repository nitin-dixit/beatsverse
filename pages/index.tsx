import { Box, Flex, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/react";
import type { NextPage } from "next";
import { GradientLayout } from "../components/gradientLayout";
import prisma from "../lib/prisma";

const Home: NextPage = ({ artists }) => {
  return (
    <GradientLayout
      color="purple"
      subtitle="profile"
      title="Nitin Dixit"
      desc="15 public playlists"
      image="https://pbs.twimg.com/profile_images/1528623590928658433/1_UmKsuf_400x400.jpg"
      roundImage
    >
      <Box color="gray.200" paddingX="50px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="sm">only visible to you</Text>
        </Box>
        <Flex gap="15px">
          {artists.map((artist) => (
            <Flex
              bg="blackAlpha.500"
              borderRadius="4px"
              padding="15px"
              flexDir="column"
              alignItems="center"
            >
              <Avatar
                name={artist.name}
                size="2xl"
                marginBottom="10px"
                src={`https://loremflickr.com/320/240/${artist.name}`}
              />

              <Text>{artist.name}</Text>

              <Text fontSize="xs">Artist</Text>
            </Flex>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({}); // getting all artist from db

  return {
    props: { artists },
  };
};

export default Home;
