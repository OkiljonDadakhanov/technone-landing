import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "@/components/header";

describe("Header component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the logo", () => {
    render(<Header />);
    expect(screen.getByText(/Techn/i)).toBeInTheDocument();
    expect(screen.getByText(/One/i)).toBeInTheDocument();
  });

  it("should render navigation items", () => {
    render(<Header />);
    expect(screen.getAllByText(/nav.services/i)).toHaveLength(2); // Desktop and mobile
    expect(screen.getAllByText(/nav.projects/i)).toHaveLength(2);
    expect(screen.getAllByText(/nav.about/i)).toHaveLength(2);
    expect(screen.getAllByText(/nav.contact/i)).toHaveLength(2);
  });

  it("should render CTA button", () => {
    render(<Header />);
    expect(screen.getAllByText(/cta.contactUs/i).length).toBeGreaterThan(0);
  });

  it("should toggle mobile menu when hamburger button is clicked", () => {
    render(<Header />);

    // Get the mobile menu button
    const menuButton = screen.getByRole("button", { name: /open menu/i });
    expect(menuButton).toBeInTheDocument();

    // Click to open menu
    fireEvent.click(menuButton);

    // Menu should be expanded
    expect(menuButton).toHaveAttribute("aria-expanded", "true");
  });

  it("should have proper accessibility attributes", () => {
    render(<Header />);

    // Header should have banner role
    expect(screen.getByRole("banner")).toBeInTheDocument();

    // Navigation should be present
    expect(screen.getByRole("navigation", { name: /main navigation/i })).toBeInTheDocument();

    // Mobile menu should have proper aria attributes (query by id since it's hidden)
    const mobileMenu = document.getElementById("mobile-menu");
    expect(mobileMenu).toBeInTheDocument();
    expect(mobileMenu).toHaveAttribute("aria-hidden", "true");
    expect(mobileMenu).toHaveAttribute("aria-label", "Mobile navigation");
  });

  it("should close mobile menu on escape key", () => {
    render(<Header />);

    const menuButton = screen.getByRole("button", { name: /open menu/i });
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-expanded", "true");

    // Press escape
    fireEvent.keyDown(document, { key: "Escape" });

    // Menu should be closed
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });
});
