import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { App } from "../App";

describe("App", () => {
  test("テストがあること", async () => {
    render(<App />);

    expect(screen.getByText("テスト")).toBeInTheDocument();
  });
});
