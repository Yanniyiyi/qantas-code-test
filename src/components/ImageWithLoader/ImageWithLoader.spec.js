import { render, screen, waitFor } from "@testing-library/react";
import ImageWithLoader from "./ImageWithLoader";

describe("Component: PriceBox", () => {
  test("it should image correclty", async () => {
    const { rerender } = render(
      <ImageWithLoader src="https://unsplash.it/145/125/?random" alt="test" />
    );
    await waitFor(() => {
      expect(screen.getByAltText(/test/i)).toBeInTheDocument();
    });
  });
});
