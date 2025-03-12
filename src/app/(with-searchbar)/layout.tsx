import { ReactNode, Suspense } from "react";
import Searchbar from "../../components/searchbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <Searchbar /> {/*서버측 사전 랜더링에서는 완전히 제외되며 클라이언트 측에서만 실행.*/}
      </Suspense>
      {children}
    </div>
  );
}
