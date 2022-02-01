import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

const App: React.FC = () => {
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="TODO"
          aria-label="TODO"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup>
    </div>
  );
};

export default App;
