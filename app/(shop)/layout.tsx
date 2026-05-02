export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* puedes poner header, sidebar, etc */}
      {children}
    </div>
  );
}