import React from "react";
import { render } from "@testing-library/react";
import Modal from ".";
import Button from "antd/es/button";
import userEvent from "@testing-library/user-event";

describe("TreeSelect", () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
  test("renders without crashing", () => {
    const showModal = jest.fn();
    const handleCancel = jest.fn();
    const handleOk = jest.fn();
    const mockSetState = jest.fn();
    jest.mock("react", () => ({
      useState: (initial) => [initial, mockSetState],
    }));
    const { getByRole, getByText } = render(
      <>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={mockSetState}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
        </Modal>
      </>
    );

    userEvent.click(getByRole("button"));
    expect(handleCancel).toHaveBeenCalledTimes(1);
  });
});
