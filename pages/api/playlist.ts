import { Playlist, User } from "@prisma/client";
import { validateRoute } from "../../lib/auth";
import prisma from "../../lib/prisma";

export default validateRoute(
  // eslint-disable-next-line no-unused-vars
  async (req: any, res: { json: (arg0: Playlist[]) => void }, user: User) => {
    const playLists = await prisma.playlist.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        name: "asc",
      },
    });

    res.json(playLists);
  }
);
