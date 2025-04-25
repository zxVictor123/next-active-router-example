export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-xs mx-auto">
      {children}
    </div>
  );
}
