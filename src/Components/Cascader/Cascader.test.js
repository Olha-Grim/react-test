import { render } from "@testing-library/react";
import React, { useState as useStateMock } from "react";
import Carousel from ".";

describe("Cascader", () => {
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
    const { container } = render(
      <Carousel autoplay>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
      </Carousel>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  test("should toggle select panel when click it", () => {
    // const useStateMock = (initState) => [initState, setState];
    // afterEach(() => {
    //   jest.clearAllMocks();
    // });

    // jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    const wrapper = render(
      <Carousel autoplay>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
      </Carousel>
    );

    // expect(setState).toHaveBeenCalledTimes(1);

    // trigger setState somehow

    // Other tests here
    // wrapper.find('input').simulate('click');
    // expect(wrapper.state().popupVisible).toBeTruthy();
    // wrapper.find('input').simulate('click');
    // expect(wrapper.state().popupVisible).toBeFalsy();
  });
});
