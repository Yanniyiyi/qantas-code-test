function FullDot({ props }) {
  return (
    <svg className="h-4 w-4 fill-yellow-400" viewBox="0 0 24 24" {...props} data-testid="full-self">
      <path d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9Z" />
    </svg>
  );
}

export default FullDot;
