import * as React from "react";
import { Button, Textarea } from "@nextui-org/react";
import { Col, Row } from "react-bootstrap";
import { CgFormatUppercase } from "react-icons/cg";
import "./scss/TextForm.css";

const TextForm = (props) => {
  const [text, setText] = React.useState("simple state");
  const utilityFunctions = {
    upperCase: function () {
      setText(text.toUpperCase());
    },
    onChangeText: function (event) {
      setText(event.target.value);
    },
  };
  return (
    <div className="container my-5 h-full">
      <h1 className="font-bold">{props.title}</h1>
      <div className="headContainer mt-3">
        <Row>
          <Col md={8}>
            <Textarea
              aria-labelledby="headContainer"
              placeholder="Enter your text"
              color="secondary"
              onChange={utilityFunctions.onChangeText}
              value={text}
              fullWidth
              rows={12}
            ></Textarea>
          </Col>
          <Col md={4}>
            <h5>Controllers</h5>
            <ul className="controllerBut">
              <li>
                <Button
                  className="customButton"
                  auto
                  onPress={utilityFunctions.upperCase}
                >
                  <CgFormatUppercase className="text-3xl" />
                </Button>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TextForm;
