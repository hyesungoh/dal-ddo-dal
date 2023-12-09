import Calculator from "./Calculator";
import { main } from "./pages.css";

export default function Home() {
  return (
    <main className={main}>
      <h1>시속 / 페이스 변환기</h1>
      <Calculator />
    </main>
  );
}
