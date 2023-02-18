import Link from "next/link";
import { useRouter } from "next/router";

const CustomErrorPage = () => {
  return (
    <>
      <div>お探しのページが見つかりません</div>
      <Link href="/">ホームに戻る</Link>
    </>
  );
};

export default CustomErrorPage;
