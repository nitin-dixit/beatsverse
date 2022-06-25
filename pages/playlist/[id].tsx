import { useRouter } from "next/router";

const Playlist = () => {
  const router = useRouter();
  return <div>playlist {router.asPath.split("/")[2]}</div>;
};

export const getServerSideProps = () => {};

export default Playlist;
