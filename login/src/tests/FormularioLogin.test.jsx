import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormularioLogin from "../components/FormularioLogin";

describe("FormularioLogin", () => {
	test("el botón está deshabilitado cuando al menos uno de los campos está vacío", () => {
		render(<FormularioLogin />);
		const emailInput = screen.getByLabelText(/email/i);
		const passwordInput = screen.getByLabelText(/password/i);
		const button = screen.getByRole("button", { name: /login/i });

		// Ambos vacíos
		expect(button).toBeDisabled();

		// Solo email lleno
		fireEvent.change(emailInput, { target: { value: "test@email.com" } });
		expect(button).toBeDisabled();

		// Solo password lleno
		fireEvent.change(emailInput, { target: { value: "" } });
		fireEvent.change(passwordInput, { target: { value: "123456" } });
		expect(button).toBeDisabled();
	});

	test("el botón está habilitado cuando ambos campos están llenos", () => {
		render(<FormularioLogin />);
		const emailInput = screen.getByLabelText(/email/i);
		const passwordInput = screen.getByLabelText(/password/i);
		const button = screen.getByRole("button", { name: /login/i });

		fireEvent.change(emailInput, { target: { value: "test@email.com" } });
		fireEvent.change(passwordInput, { target: { value: "123456" } });
		expect(button).not.toBeDisabled();
	});
});
