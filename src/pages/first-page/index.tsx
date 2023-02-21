import type { GetStaticProps, NextPage } from "next";

type Props = {
  title: string;
};

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    title: "システム設定",
  },
});

const FirstPage: NextPage<Props> = ({ title }) => {
  console.log(title);

  return (
    <>
      <div>ようこそ、賃貸記録です。</div>
      <div>
        賃貸に入居したら、壁やクロスの傷、汚れはないかチェックしましょう。
      </div>
      <div>
        もしも、入居時から傷や汚れがあって申告をしなかった場合、退去時にあなたにクリーニングや舗装の料金を請求される可能性があります。
      </div>
      <div>
        大切なあなたのお金を守るためにも、記録をしっかりつけて退去時にトラブルにならないように努めましょう。
      </div>
      <div>
       来年、リリースしたい！
      </div>
    </>
  );
};

export default FirstPage;
