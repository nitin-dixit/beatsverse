import type { NextPage } from "next";
import { GradientLayout } from "../components/gradientLayout";

const Home: NextPage = () => {
  return (
    <GradientLayout
      color="green"
      subtitle="profile"
      title="Nitin Dixit"
      desc="15 public playlists"
      image="https://pbs.twimg.com/profile_images/1528623590928658433/1_UmKsuf_400x400.jpg"
      roundImage
    >
      home page
    </GradientLayout>
  );
};

export default Home;
