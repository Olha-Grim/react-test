import React from "react";
import { render } from "@testing-library/react";
import { Table } from ".";

describe("Table", () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
  test("interaction with Table component", () => {
    const dataSource = [
      {
        key: "1",
        name: "Mike",
        age: 32,
        address: "10 Downing Street",
      },
      {
        key: "2",
        name: "John",
        age: 42,
        address: "10 Downing Street",
      },
    ];

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
      },
    ];

    const { container } = render(
      <Table dataSource={dataSource} columns={columns} />
    );
    const table = container.firstChild;
    expect(table).toBeInTheDocument();
  });
});
