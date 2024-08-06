import Link from "next/link";

const TestRoute = () => {
  return (
    <>
      <h1>Test 라우팅 페이지</h1>
      <Link href={"/"}>홈으로</Link>
    </>
  );
};

export default TestRoute;
