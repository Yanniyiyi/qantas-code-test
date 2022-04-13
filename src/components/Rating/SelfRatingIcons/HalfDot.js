function HalfDot({ props }) {
  return (
    <svg className="h-4 w-4 fill-yellow-400" viewBox="0 0 24 24" {...props} data-testid="half-self">
      <path d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm0 16.14V4.86a7.14 7.14 0 0 1 0 14.28Z" />
    </svg>
  );
}

export default HalfDot;
