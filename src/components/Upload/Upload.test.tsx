import React from "react";
import axios from "axios";
import {
  render,
  RenderResult,
  fireEvent,
  waitFor,
  createEvent,
} from "@testing-library/react";
import { Upload, UploadProps } from "./Upload";

jest.mock("../Icon/icon", () => {
  return ({ icon, onClick }) => {
    return <span onClick={onClick}>{icon}</span>;
  };
});

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const testProps: UploadProps = {
  action: "fakeurl.com",
  onSuccess: jest.fn(),
  onChange: jest.fn(),
  onRemove: jest.fn(),
  drag: true,
};

let wrapper: RenderResult, fileInput: HTMLInputElement, uploadArea: HTMLElement;
const testFile = new File(['xzy'], 'test.png', { type: 'image/png' })
describe('test upload component', () => {
    
})