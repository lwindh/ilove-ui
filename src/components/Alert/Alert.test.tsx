import React from "react";
import { RenderResult, fireEvent, render } from "@testing-library/react";
import Alert, { AlertProps } from "./Alert";

jest.mock("../Icon/icon", () => {
  return () => {
    return <i className="fa" />;
  };
});

const testProps: AlertProps = {
  message: "test",
  onClose: jest.fn(),
};

let wrapper: RenderResult, alertComponent: HTMLElement,colsedComponent: HTMLElement;
describe("test Alert component", () => {
  beforeEach(() => {
    wrapper = render(<Alert {...testProps} />);
    alertComponent = wrapper.getByTestId("test-alert");
    colsedComponent = alertComponent.querySelector(":scope > Button")
  });

  it("should render correct Alert based on default props", () => {
    expect(alertComponent).toHaveClass("alert-info");
    expect(alertComponent).not.toHaveClass("alert-motion-leave alert-motion-leave-active");
    expect(wrapper.getByText("test")).toBeInTheDocument();
    expect(
      alertComponent.getElementsByClassName("alert-description")[0].innerHTML
    ).toEqual("");
    expect(alertComponent.querySelector(":scope > Button")).toBeInTheDocument();
    fireEvent.click(colsedComponent)
    expect(alertComponent).toHaveClass("alert-motion-leave alert-motion-leave-active");
  });
});
