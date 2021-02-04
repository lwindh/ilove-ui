import React from "react";
import {
  RenderResult,
  fireEvent,
  render,
} from "@testing-library/react";
import Tabs, { TabsProps } from "./Tabs";
import TabsItem from "./TabsItem";
import Icon from "../Icon/Icon"

jest.mock("../Icon/icon", () => {
  return () => {
    return <i className="fa" />;
  };
});

const testProps: TabsProps = {
  defaultActiveKey: "0",
  type: "line",
};

const cardProps: TabsProps = {
  defaultActiveKey: "0",
  type: "card",
  onSelect: jest.fn(),
};

const generateTabs = (props: TabsProps) => {
  return (
    <Tabs {...props}>
      <TabsItem label='Tab 1'>active</TabsItem>
      <TabsItem label={<><Icon icon="coffee" />{'  '}Tab 2</>}>Content of Tab Itme 2</TabsItem>
    </Tabs>
  );
};

let wrapper: RenderResult,
  tabsElement: HTMLElement,
  activeElement: HTMLElement,
  defaultElement: HTMLElement;
describe("test Tabs and TabsItem component", () => {
  beforeEach(() => {
    wrapper = render(generateTabs(testProps));
    tabsElement = wrapper.getByTestId("test-tabs");
    activeElement = wrapper.getByText("Tab 1");
    defaultElement = wrapper.getByText("Tab 2");
  });
  it("should render correct Tabs and TabsItem based on default props", () => {
    expect(tabsElement).toBeInTheDocument();
    expect(wrapper.getByText("active")).toBeInTheDocument();
    expect(tabsElement).toHaveClass("tabs tabs-line");
    expect(tabsElement.querySelectorAll(":scope > div").length).toEqual(2);
    expect(activeElement).toHaveClass("tabsItem is-active");
    expect(defaultElement).toHaveClass("tabsItem");
  });
  it("click items should change active and call the right callback", () => {
    fireEvent.click(defaultElement);
    expect(wrapper.getByText("Content of Tab Itme 2")).toBeInTheDocument();
    expect(defaultElement).toHaveClass("is-active");
    expect(activeElement).not.toHaveClass("is-active");
  });
});

describe("test Tabs and TabsItem card component", () => {
    beforeEach(() => {
      wrapper = render(generateTabs(cardProps));
      tabsElement = wrapper.getByTestId("test-tabs");
      activeElement = wrapper.getByText("Tab 1");
      defaultElement = wrapper.getByText("Tab 2");
    });
    it("should render correct Tabs and TabsItem card based on default props", () => {
      expect(tabsElement).toBeInTheDocument();
      expect(wrapper.getByText("active")).toBeInTheDocument();
      expect(tabsElement).toHaveClass("tabs tabs-card");
      expect(tabsElement.querySelectorAll(":scope > div").length).toEqual(2);
      expect(activeElement).toHaveClass("tabsItem is-active");
      expect(defaultElement).toHaveClass("tabsItem");
    });
    it("click items should change active and call the right callback", () => {
      fireEvent.click(defaultElement);
      expect(wrapper.getByText("Content of Tab Itme 2")).toBeInTheDocument();
      expect(defaultElement).toHaveClass("is-active");
      expect(activeElement).not.toHaveClass("is-active");
    });
  });
