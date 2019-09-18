import * as React from "react";
import "./styles/main.scss";
import { Button } from "reactstrap";

const App: React.FC = () => {
  return (
    <div>
      <Button color="primary">vo</Button>{" "}
      <Button outline color="secondary">
        buta
      </Button>{" "}
      <Button color="secondary" size="lg">
        o
      </Button>
      <Button color="success">smash</Button>{" "}
      <Button color="info">valendo</Button> <Button color="warning">o</Button>{" "}
      <Button color="danger">oco</Button>
    </div>
  );
};

export default App;
