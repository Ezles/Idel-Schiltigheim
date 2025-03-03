import ContactPageContent from "@/components/contact-page-content";
import { toast } from "@/components/ui/use-toast";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("@/components/ui/use-toast", () => ({
  toast: jest.fn(),
}));

jest.mock("@/components/navbar-form", () => {
  return function MockedNavbar() {
    return <div data-testid="navbar-mock">Navbar Mock</div>;
  };
});

jest.mock("@/components/footer-section", () => {
  return function MockedFooter() {
    return <div data-testid="footer-mock">Footer Mock</div>;
  };
});

describe("ContactPageContent", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the contact form correctly", () => {
    render(<ContactPageContent />);

    expect(screen.getByText("Contactez-nous")).toBeInTheDocument();

    expect(screen.getByLabelText(/Nom complet/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Téléphone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Sujet/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /Envoyer le message/i })
    ).toBeInTheDocument();

    expect(screen.getByTestId("navbar-mock")).toBeInTheDocument();
    expect(screen.getByTestId("footer-mock")).toBeInTheDocument();
  });

  it("validates required fields", async () => {
    render(<ContactPageContent />);

    const submitButton = screen.getByRole("button", {
      name: /Envoyer le message/i,
    });
    fireEvent.click(submitButton);

    expect(toast).not.toHaveBeenCalled();
  });

  it("submits the form successfully", async () => {
    const user = userEvent.setup();
    render(<ContactPageContent />);

    await user.type(screen.getByLabelText(/Nom complet/i), "John Doe");
    await user.type(screen.getByLabelText(/Email/i), "john@example.com");
    await user.type(screen.getByLabelText(/Téléphone/i), "0123456789");
    await user.type(screen.getByLabelText(/Sujet/i), "Test Subject");
    await user.type(
      screen.getByLabelText(/Message/i),
      "This is a test message"
    );

    const submitButton = screen.getByRole("button", {
      name: /Envoyer le message/i,
    });
    await user.click(submitButton);

    expect(screen.getByText(/Envoi en cours.../i)).toBeInTheDocument();

    await waitFor(
      () => {
        expect(screen.getByText(/Message envoyé !/i)).toBeInTheDocument();
      },
      { timeout: 2000 }
    );

    await waitFor(
      () => {
        expect(toast).toHaveBeenCalledWith({
          title: "Message envoyé",
          description: "Nous vous répondrons dans les plus brefs délais.",
        });
      },
      { timeout: 3000 }
    );

    await waitFor(
      () => {
        expect(screen.getByLabelText(/Nom complet/i)).toHaveValue("");
        expect(screen.getByLabelText(/Email/i)).toHaveValue("");
        expect(screen.getByLabelText(/Téléphone/i)).toHaveValue("");
        expect(screen.getByLabelText(/Sujet/i)).toHaveValue("");
        expect(screen.getByLabelText(/Message/i)).toHaveValue("");
      },
      { timeout: 3000 }
    );
  });

  it("allows closing the success message manually", async () => {
    const user = userEvent.setup();
    render(<ContactPageContent />);

    await user.type(screen.getByLabelText(/Nom complet/i), "John Doe");
    await user.type(screen.getByLabelText(/Email/i), "john@example.com");
    await user.type(screen.getByLabelText(/Sujet/i), "Test Subject");
    await user.type(
      screen.getByLabelText(/Message/i),
      "This is a test message"
    );

    const submitButton = screen.getByRole("button", {
      name: /Envoyer le message/i,
    });
    await user.click(submitButton);

    await waitFor(
      () => {
        expect(screen.getByText(/Message envoyé !/i)).toBeInTheDocument();
      },
      { timeout: 2000 }
    );

    const closeButton = screen.getByRole("button", { name: /Fermer/i });
    await user.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByText(/Message envoyé !/i)).not.toBeInTheDocument();
    });
  });
});
