import { validateToken } from "../../lib/auth";
import prisma from "../../lib/prisma";

const Playlist = ({ playList }) => {
  return <div>{playList.name}</div>;
};

export const getServerSideProps = async ({ query, req }) => {
  const { id } = validateToken(req.cookies.BEATSVERSE_ACCESS_TOKEN);
  const [playList] = await prisma.playlist.findMany({
    where: {
      id: query.id,
      userId: id,
    },

    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  }); // get the playlist where the id = id on url, userId = id of current logged in user and then include(join in sql) songs with artist of that song by selecting only his/her name and id.

  return {
    props: { playList },
  };
};

export default Playlist;
