import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Card, CardMeta } from ".";
import { Avatar } from "../Avatar";
import { EditOutlined, SettingOutlined } from "@ant-design/icons";

describe("Card", () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
  test("interaction with Card", () => {
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
    const avatar = getByText(/Card title/i);
    expect(imgExample).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();

    const buttonSetting = getByLabelText("setting");
    const buttonEdit = getByLabelText("edit");
    userEvent.click(buttonSetting);
    userEvent.click(buttonEdit);

    // expect(getByLabelText("setting")).toHaveFocus();
    // expect(getByLabelText("edit")).toHaveFocus();

    // expect(getByLabelText("setting")).toHaveFocus();
    // expect(imgEdit).toHaveFocus();

    // screen.debug();
  });
});
