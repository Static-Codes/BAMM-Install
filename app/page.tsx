import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BAMM Installation',
  description:
    'A simple installation page for BAM Manager.',
};

export default function Home() {
  const containerStyle = {
    textAlign: "center" as const,
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
  };

  const headerStyle = {
    color: "#333",
    marginBottom: "20px",
  };

  const linkStyle = {
    color: "#0070f3",
    textDecoration: "none",
    fontWeight: "bold" as const,
    borderBottom: "2px solid #0070f3",
    paddingBottom: "2px",
    transition: "color 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ ...headerStyle, fontSize: "2.5em" }}>
        BAMM Installation Simplified
      </h1>
      <h2 style={{ fontSize: "1.2em", margin: "10px 0 30px 0" }}>
        This site uses URL redirects to simplify the BAMM installation URLs, as opposed to serving them from the main repo.
      </h2>
      <p style={{ fontSize: "1.1em", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto 20px auto" }}>
        To install BAMM, please visit the installation section of the main repo {" "}
        <a 
          href="https://github.com/Static-Codes/BrowserAutomationMaster/blob/main/sections/installation.md"
          style={linkStyle}
        >
          here
        </a>
        .
      </p>
      <p style={{ fontSize: "0.9em", color: "#666", fontStyle: "italic" }}>
        While you can download these scripts directly using this domain, it is strongly advised against due to numerous unforeseen issues that may arise.
      </p>
    </div>
  );
}
