import { clsx } from "clsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { Menu } from "./components/menu";
import { Pages } from "./pages";
import { Container } from "./components/container";
import { NavBar } from "./components/navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <div
        className={clsx(["uk-flex", "uk-flex-row"])}
        data-uk-height-viewport="offset-top: true"
      >
        <Menu />
        <Container extraClass={clsx(["uk-flex-1"])}>
          <Pages />
        </Container>
      </div>
    </QueryClientProvider>
  );
}

export default App;
