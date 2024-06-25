export default function Container({ children }) {
  return (
    <div className="max-w-screen min-h-screen md:h-screen bg-gradient-to-r from-primary to-secondary pt-20 md:pt-24">
      {children}
    </div>
  );
}
