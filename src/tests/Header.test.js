import { render, screen, act, fireEvent } from '@testing-library/react';
import App from '../App';
import { Header } from '../components';


const MOCK_DATA = {
    "id": "darkModeMachine",
    "initialState": "light",
    "transitions": { "light": { "toggle": "dark" }, "dark": { "toggle": "light" } },
};

describe("HeaderComponent", () =>
{

    let container;

    beforeEach(() =>
    {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() =>
    {
        document.body.removeChild(container);
        container = null;
    });

    it("Check Header components has rendered", async () =>
    {

        await act(async () =>
        {
            render(<Header />, container);
        });
        expect(screen.getByTestId("header")).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeInTheDocument();
        expect(screen.getByText("Shlomie Berg")).toBeInTheDocument();
        expect(screen.getByText("Software Engineer.")).toBeInTheDocument();
    });

    it("theme toggle button inital state is light after api works", async () =>
    {
        const fetchSpy = jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(MOCK_DATA),
            })
        );
        await act(async () =>
        {
            render(<App />, container);
        });
        const btn = screen.getByRole("button");
        expect(btn).toBeInTheDocument();

        expect(btn.textContent).toEqual("light");

        fetchSpy.mockClear();
    });


    it("theme toggle button state is dark after onClick happened", async () =>
    {
        const fetchSpy = jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(MOCK_DATA),
            })
        );
        await act(async () =>
        {
            render(<App />, container);
        });
        const btn = screen.getByRole("button");
        fireEvent.click(btn);

        expect(btn.textContent).toEqual("dark");

        fetchSpy.mockClear();
    });
});