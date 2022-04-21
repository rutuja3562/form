import { Buttons } from "./components/Buttons";
// import { Button } from "antd";
import "./App.css";
import { useState } from "react";
import { Flex } from "./components/Flex";
import { Button } from "antd";

// import { Button } from "antd";
// import { Form, Input, Button, Checkbox } from "antd";
function App() {
//   const [theme, setTheme] = useState("dark");
const [primary,setPrimary]=useState("true")
  return (
    <div className="App">
      {/* <h3>Theme:{theme}</h3>
      <Button
        theme={theme}
        onClick={() => {
          return setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        Change Theme
      </Button>
      <br />
      <Button children={"ClickMe"} />
      <Button>Add Me</Button>
      <Flex>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
      </Flex> */}
      <Buttons></Buttons>
      {/* <Button type="primary">Primary Button</Button> */}
      {/* <Form />
      <Input />
      <Checkbox /> */}
    </div>
  );
}

export default App;
