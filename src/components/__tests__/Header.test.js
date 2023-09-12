import { Provider } from "react-redux";
import Header from "../Header";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Link } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

it("should check if it has 'home' link on navbar", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const homeButton = screen.getByText("Home");
  //multiple buttons
  //   const  loginbutton = screen.getByRole('button', {name: "login"})

  expect(homeButton).toBeInTheDocument();
});
