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

const closableProps: AlertProps = {
    message: "test",
    type: 'success',
    closable: false, 
}

let wrapper: RenderResult, alertComponent: HTMLElement;
describe("test Alert component", () => {
  it("should render correct Alert based on default props", () => {
    wrapper = render(<Alert {...testProps} />);
    alertComponent = wrapper.getByTestId("test-alert");
    expect(alertComponent).toHaveClass("alert-info");
    expect(alertComponent).not.toHaveClass("alert-motion-leave alert-motion-leave-active");
    expect(wrapper.getByText("test")).toBeInTheDocument();
    expect(
      alertComponent.getElementsByClassName("alert-description")[0].innerHTML
    ).toEqual("");
    expect(alertComponent.querySelector(":scope > Button")).toBeInTheDocument();
    fireEvent.click(alertComponent.querySelector(":scope > Button"))
    expect(testProps.onClose).toHaveBeenCalled()
    expect(alertComponent).toHaveClass("alert-motion-leave alert-motion-leave-active");
  });

  it("should render correct Alert based on closable props", () => {
    wrapper = render(<Alert {...closableProps} />);
    alertComponent = wrapper.getByTestId("test-alert");
    expect(alertComponent).toHaveClass("alert-success");
    expect(alertComponent.querySelector(":scope > Button")).not.toBeInTheDocument();
  })
});
