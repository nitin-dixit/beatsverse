import {
  Box,
  Divider,
  LinkBox,
  LinkOverlay,
  List,
  ListIcon,
  ListItem,
  SkeletonText,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { BiSearch, BiLibrary, BiHome } from "react-icons/bi";
import { RiPlayListAddFill } from "react-icons/ri";
import { MdFavorite } from "react-icons/md";
import logo from "../public/logo.png";
import { usePlaylist } from "../lib/hooks";

const navMenu = [
  {
    name: "Home",
    route: "/",
    icon: BiHome,
  },
  {
    name: "Search",
    route: "/search",
    icon: BiSearch,
  },
  {
    name: "Your Library",
    route: "/library",
    icon: BiLibrary,
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    route: "/",
    icon: RiPlayListAddFill,
  },
  {
    name: "Liked Songs",
    route: "/",
    icon: MdFavorite,
  },
];

// const playList = new Array(30)
//   .fill(1)
//   .map((_, i) => ({ name: `Playlist ${i+1}` }));

const SideBar = () => {
  const { playLists, isLoaded } = usePlaylist();
  const sortedPlayLists = [...playLists].sort((a, b) => {
    if (Number(a.name.split(" ")[1]) < Number(b.name.split(" ")[1])) return -1;
    if (Number(a.name.split(" ")[1]) > Number(b.name.split(" ")[1])) return 1;
    return 0;
  });

  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <Image src={logo} height="80px" width="80px" />
        </Box>

        <Box marginBottom="30px">
          <List spacing={2}>
            {navMenu.map((item) => (
              <ListItem paddingX="20px" fontSize="16px" key={item.name}>
                <LinkBox>
                  <Link href={item.route} passHref>
                    <LinkOverlay _hover={{ color: "white" }}>
                      <ListIcon
                        as={item.icon}
                        marginRight="20px"
                        fontSize={20}
                      />
                      {item.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box>
          <List spacing={2}>
            {musicMenu.map((item) => (
              <ListItem paddingX="20px" fontSize="16px" key={item.name}>
                <LinkBox>
                  <Link href={item.route} passHref>
                    <LinkOverlay _hover={{ color: "white" }}>
                      <ListIcon
                        as={item.icon}
                        marginRight="20px"
                        fontSize={20}
                        _hover={{ color: "white" }}
                      />
                      {item.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider color="gray.800" marginTop={4} />

        <Box height="45%" overflowY="auto" marginTop={4}>
          <SkeletonText isLoaded={isLoaded} fadeDuration={4}>
            <List spacing={2}>
              {sortedPlayLists.map((playlist) => (
                <ListItem paddingX="20px" fontSize="16px" key={playlist.id}>
                  <LinkBox>
                    <Link
                      href={{
                        pathname: "/playlist/[id]",
                        query: { id: playlist.id },
                      }}
                      passHref
                    >
                      <LinkOverlay _hover={{ color: "white" }}>
                        {playlist.name}
                      </LinkOverlay>
                    </Link>
                  </LinkBox>
                </ListItem>
              ))}
            </List>
          </SkeletonText>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
