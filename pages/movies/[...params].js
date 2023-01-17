import { useRouter } from "next/router";
import { getServerSideProps } from "..";
import Seo from "../Seo";

export default function Detail() {
  const router = useRouter();
  const [title, id] = router.query.params || [];

  return (
    <div>
      <Seo title={title} />
      <h1>{title || "Loading..."}</h1>
    </div>
  );
}
