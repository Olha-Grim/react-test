import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card, CardMeta } from ".";
import { Avatar } from "../Avatar";

describe("Button", () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
  test("interaction with input", () => {
    const { getByRole, getByAltText, getByLabelText, getByText } = render(
      <>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
          ]}
        >
          <CardMeta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>
      </>
    );

    const imgExample = getByAltText("example");
    const imgSetting = getByLabelText("setting");
    const imgEdit = getByLabelText("edit");
    console.log(imgEdit, "imgEdit");

    const card = getByText(/Card title/i);
    expect(imgExample).toBeInTheDocument();
    expect(card).toBeInTheDocument();

    userEvent.click(getByLabelText("setting"));
    userEvent.click(getByLabelText("edit"));

    // expect(getByLabelText("setting")).toHaveFocus();
    // expect(getByLabelText("edit")).toHaveFocus();

    // expect(getByLabelText("setting")).toHaveFocus();
    // expect(imgEdit).toHaveFocus();

    // expect(imgExample).toBeInTheDocument()
    // console.log(imgSecond);
    // const [] = getByAll

    screen.debug();
  });
});
