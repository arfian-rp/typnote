import "../styles/globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#1E293B" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="note app by arfian" />
        <title>TYPNOTE</title>
        met
      </head>
      <body className="bg-primary">{children}</body>
    </html>
  );
}
