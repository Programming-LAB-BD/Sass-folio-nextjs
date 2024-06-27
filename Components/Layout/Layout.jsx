import MainContainer from "@/Components/Container/MainContainer";
import Header from "@/Components/Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
    </>
  );
}
