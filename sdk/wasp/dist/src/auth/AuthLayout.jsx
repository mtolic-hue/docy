export function AuthLayout({ children }) {
    return (<div className="flex justify-center">
      {/* Auth UI has margin-top on title, so we lower the top padding */}
      <div className="card mt-32 h-fit w-full max-w-md px-8 py-10 pt-4">
        {children}
      </div>
    </div>);
}
//# sourceMappingURL=AuthLayout.jsx.map