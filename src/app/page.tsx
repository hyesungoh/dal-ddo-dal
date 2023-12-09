import Calculator from "./Calculator";
import * as s from "./pages.css";

export default function Home() {
  return (
    <main className={s.main}>
      <h1 className={s.h1}>시속 / 페이스 변환기</h1>
      <Calculator />
    </main>
  );
}
