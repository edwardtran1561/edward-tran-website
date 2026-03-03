const AuthorizeLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[url(/imgs/authorize-page-bg.png)] bg-contain bg-bottom bg-no-repeat">
      {children}
    </div>
  );
};

export default AuthorizeLayout;
