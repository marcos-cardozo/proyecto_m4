export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex justify-center items-center gap-24">  
        <div>{children}</div>
      </div>
    </div>
  );
}
