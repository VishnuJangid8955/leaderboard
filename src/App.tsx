import { FC } from "react";
import LeaderBoard from "./pages/LeaderBoard";
import AppStyle from "./style";

const App: FC = () => {
  return (
    <div>
      <AppStyle />
      <LeaderBoard />
    </div>
  );
};

export default App;
