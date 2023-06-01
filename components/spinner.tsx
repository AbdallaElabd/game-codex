export const Spinner = () => {
  return (
    <div className="h-8 w-8 animate-spin">
      <svg fill="none" viewBox="0 0 24 24" className="fill-white">
        <path d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 00-7 7H2z" />
      </svg>
    </div>
  );
};
