import Container from "../../components/atoms/Container";
import Navbar from "../../components/organisms/Navbar";
import Footer from "../../components/organisms/Footer";
import FAQComponent from '../../components/organisms/FAQComponent';

export default function FAQPage() {
  return (
    <main>
      <Navbar dark />

      <Container className="my-20 lg:my-24 flex flex-col gap-3">
        <FAQComponent />
      </Container>

      <Footer />
    </main>
  );
}

