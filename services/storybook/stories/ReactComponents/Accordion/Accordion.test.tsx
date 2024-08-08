import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "../../../test/test-utils";
import { composeStories } from "@storybook/react";
import * as stories from "./Accordion.stories";

const { AccordionTestStory } = composeStories(stories);

describe("Accordion 컴포넌트 기능 테스트", () => {
  it("AccordionButton 클릭 시 AccordionPanel 펼쳐지는지 확인", async () => {
    // GIVEN
    const args = {
      items: [
        {
          name: "첫 번째",
          content: "내용입니다",
        },
      ],
      defaultActiveItems: [],
    };

    // WHEN
    render(<AccordionTestStory {...args} />);

    // THEN
    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "false",
    );

    await screen.getByTestId("button-0").click();
    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "true",
    );
  });

  it("두 번째 AccordionButton 클릭 시, 두 번쨰 AccordionPanel 펼쳐지는지", async () => {
    // GIVEN
    const args = {
      items: [
        {
          name: "첫 번째",
          content: "내용입니다",
        },
        {
          name: "두 번째",
          content: "내용입니다",
        },
      ],
      defaultActiveItems: [],
    };

    // WHEN
    render(<AccordionTestStory {...args} />);

    // THEN
    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "false",
    );
    expect(screen.getByTestId("panel-1")).toHaveAttribute(
      "data-action-item",
      "false",
    );

    await screen.getByTestId("button-1").click();
    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "false",
    );
    expect(screen.getByTestId("panel-1")).toHaveAttribute(
      "data-action-item",
      "true",
    );
  });

  it("활성화 되어있는 AccordionButton 클릭 시 AccordionPanel 접히는지", async () => {
    // GIVEN
    const args = {
      items: [
        {
          name: "첫 번째",
          content: "내용입니다",
        },
      ],
      defaultActiveItems: [],
    };

    // WHEN
    render(<AccordionTestStory {...args} />);
    await screen.getByTestId("button-0").click();

    // THEN
    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "true",
    );

    await screen.getByTestId("button-0").click();
    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "false",
    );
  });

  it("defaultActiveItems에 itemName이 있을 경우, 초기 렌더링 시 AccordionPanel 펼쳐져 있는지", async () => {
    // GIVEN
    const args = {
      items: [
        {
          name: "첫 번째",
          content: "내용입니다",
        },
      ],
      defaultActiveItems: ["첫 번째"],
    };

    // WHEN
    render(<AccordionTestStory {...args} />);

    // THEN
    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "true",
    );
  });
});
