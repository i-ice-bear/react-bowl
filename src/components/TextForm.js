import * as React from "react";
import { Button, Textarea, Tooltip } from "@nextui-org/react";
import { Col, Row } from "react-bootstrap";
import { CgFormatUppercase, CgErase, CgClipboard } from "react-icons/cg";

const TextForm = (props) => {
  const [text, setText] = React.useState("");
  const utilityFunctions = {
    upperCase: function () {
      setText(text.toUpperCase());
    },
    onChangeText: function (event) {
      setText(event.target.value);
    },
    clearCanvas: function (event) {
      setText(" ");
    },
    copyClipBoard: function (event) {
      navigator.clipboard.writeText(text);
      alert("Copied to clipboard");
    },
  };
  return (
    <div className="container my-4 h-full">
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
            <Row></Row>
            <ul className="controllerBut flex">
              <Col>
                <li>
                  <Tooltip content={"Convert to uppercase"} color={"secondary"}>
                    <Button
                      color={"secondary"}
                      className="customButton"
                      auto
                      onPress={utilityFunctions.upperCase}
                    >
                      <CgFormatUppercase className="text-3xl" />
                    </Button>
                  </Tooltip>
                </li>
              </Col>
              <Col>
                <li className="mx-2">
                  <Tooltip content={"Clear canvas"} color={"secondary"}>
                    <Button
                      color={"secondary"}
                      className="customButton"
                      auto
                      onPress={utilityFunctions.clearCanvas}
                    >
                      <CgErase className="text-3xl" />
                    </Button>
                  </Tooltip>{" "}
                </li>
              </Col>
              <Col>
                <li>
                  <Tooltip
                    content={
                      navigator.clipboard.writeText
                        ? "Copy to clipboard"
                        : "Enable clipboard now"
                    }
                    color={
                      !navigator.clipboard.writeText ? "error" : "secondary"
                    }
                  >
                    <Button
                      color={
                        navigator.clipboard.writeText ? "secondary" : "error"
                      }
                      className="customButton"
                      auto
                      onPress={
                        !navigator.clipboard.writeText
                          ? alert("Enable clipboard")
                          : utilityFunctions.copyClipBoard
                      }
                    >
                      <CgClipboard className="text-3xl" />
                    </Button>
                  </Tooltip>{" "}
                </li>
              </Col>
            </ul>
          </Col>
        </Row>
      </div>
      <div className="container my-3">
        <Row>
          <Col md={4}>
            <h4>Text summary</h4>
            <p className="flex">
              {`
              Total Letters ${text.length} 
              and words ${text.split(" ").length}
              `}
            </p>
            <p>{`
            Time to read ${text.length} words is ${
              text.split(" ").length * 0.008
            } minutes
              `}</p>
          </Col>
          <Col md={8}>
            <h4>Preview of text</h4>
            <Textarea
              value={text}
              placeholder="Your output will show here"
              fullWidth
              color="secondary"
              bordered
            ></Textarea>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TextForm;
