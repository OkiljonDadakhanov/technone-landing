import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Contact } from "@/components/contact";

// Mock the server action
vi.mock("@/app/actions/contact", () => ({
  submitContactForm: vi.fn(),
}));

import { submitContactForm } from "@/app/actions/contact";

describe("Contact component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (submitContactForm as ReturnType<typeof vi.fn>).mockResolvedValue({
      success: true,
    });
  });

  it("should render contact heading", () => {
    render(<Contact />);
    expect(screen.getByText(/heading/i)).toBeInTheDocument();
  });

  it("should render contact info with email and phone", () => {
    render(<Contact />);
    expect(screen.getByText(/oqiljondadaxanov@gmail.com/i)).toBeInTheDocument();
  });

  it("should render contact form fields", () => {
    render(<Contact />);
    expect(screen.getByLabelText(/fields.fullName/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/fields.phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/fields.message/i)).toBeInTheDocument();
  });

  it("should render submit button", () => {
    render(<Contact />);
    expect(screen.getByRole("button", { name: /button.send/i })).toBeInTheDocument();
  });

  it("should show validation errors when submitting empty form", async () => {
    render(<Contact />);

    const submitButton = screen.getByRole("button", { name: /button.send/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/errors.nameRequired/i)).toBeInTheDocument();
      expect(screen.getByText(/errors.phoneRequired/i)).toBeInTheDocument();
      expect(screen.getByText(/errors.messageRequired/i)).toBeInTheDocument();
    });
  });

  it("should clear errors when user starts typing", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    // Submit empty form to show errors
    const submitButton = screen.getByRole("button", { name: /button.send/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/errors.nameRequired/i)).toBeInTheDocument();
    });

    // Start typing in name field
    const nameInput = screen.getByLabelText(/fields.fullName/i);
    await user.type(nameInput, "John");

    // Error should be cleared
    expect(screen.queryByText(/errors.nameRequired/i)).not.toBeInTheDocument();
  });

  it("should submit form successfully", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    // Fill in the form
    await user.type(screen.getByLabelText(/fields.fullName/i), "John Doe");
    await user.type(screen.getByLabelText(/fields.phone/i), "+998901234567");
    await user.type(screen.getByLabelText(/fields.message/i), "Hello!");

    // Submit the form
    const submitButton = screen.getByRole("button", { name: /button.send/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(submitContactForm).toHaveBeenCalledWith({
        name: "John Doe",
        phone: "+998901234567",
        message: "Hello!",
      });
    });
  });

  it("should show success message after successful submission", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    // Fill in the form
    await user.type(screen.getByLabelText(/fields.fullName/i), "John Doe");
    await user.type(screen.getByLabelText(/fields.phone/i), "+998901234567");
    await user.type(screen.getByLabelText(/fields.message/i), "Hello!");

    // Submit the form
    const submitButton = screen.getByRole("button", { name: /button.send/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/success/i)).toBeInTheDocument();
    });
  });

  it("should have proper accessibility attributes", () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText(/fields.fullName/i);
    expect(nameInput).toHaveAttribute("autocomplete", "name");

    const phoneInput = screen.getByLabelText(/fields.phone/i);
    expect(phoneInput).toHaveAttribute("type", "tel");
    expect(phoneInput).toHaveAttribute("autocomplete", "tel");
  });
});
