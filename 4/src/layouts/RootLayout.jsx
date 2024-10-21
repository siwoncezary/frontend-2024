import { Button, Container, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function RootLayout({ children }) {
  const navigate = useNavigate();
  return (
    <main>
      <Container fluid className="mt-4 col-sm-6 ">
        <Stack gap={3} direction="vertical">
          <Button variant="outline-primary" onClick={() => navigate("/form")}>
            Formularz
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => navigate("/list")}
          >
            Lista
          </Button>
          <Button variant="outline-success" onClick={() => navigate("/about")}>
            O programie
          </Button>
        </Stack>
      </Container>
      <Container fluid className="mt-4 col-sm-6">
            {children}
        </Container>
    </main>
  );
}

export default RootLayout;
