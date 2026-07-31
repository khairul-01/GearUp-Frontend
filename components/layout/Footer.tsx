export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} GearUp.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}