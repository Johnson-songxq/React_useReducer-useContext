import AddComment from "./components/AddComment";
import { CommentList } from "./components/CommentList";
import "./styles.css";
import { GlobalProvider } from "./context/GlobalState";

export default function App() {
  return (
    <GlobalProvider className="App">
      <AddComment />
      <CommentList />
    </GlobalProvider>
  );
}
