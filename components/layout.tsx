import Header from "./Header/Header";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
