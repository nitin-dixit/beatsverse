import { Box, Flex, Text } from "@chakra-ui/layout";
import type { NextPage } from "next";
import { GradientLayout } from "../components/gradientLayout";
import prisma from "../lib/prisma";

const Home: NextPage = ({ artists }) => {
  return (
    <GradientLayout
      color="green"
      subtitle="profile"
      title="Nitin Dixit"
      desc="15 public playlists"
      image="https://pbs.twimg.com/profile_images/1528623590928658433/1_UmKsuf_400x400.jpg"
      roundImage
    >
      <Box color="white">
        <Box>
          <Text>Top artist this month</Text>
          <Text>only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Text>{artist.name}</Text>
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
