import { describe, test, expect } from "vitest";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import CustomHeader from "./CustomHeader";

describe('CustomHeader', () => {
    const title = "test Title"
    test('Should render the title correctly', () => {

        render(<CustomHeader title={title} />);
        screen.debug()
        expect(screen.getByText(title)).toBeDefined()
    });
    test('Should render the description when provided', () => {

        const des = "test Description"

        render(<CustomHeader title={title} description={des} />);
        screen.debug();
        expect(screen.getByText(des)).toBeDefined()
    });

    test('Should render description when not provided', () => {
        const { container } = render(<CustomHeader title={title} />);

        const divElement = container.querySelector('.content-center');

        const h1 = divElement?.querySelector('h1');
        expect(h1?.innerHTML).toBe(title);

        const p = divElement?.querySelector('p');
        expect(p?.innerHTML).toBeUndefined();
    });
})