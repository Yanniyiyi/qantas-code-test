function EmptyDot({ props }) {
  return (
    <svg className="h-4 w-4 fill-yellow-400" viewBox="0 0 24 24" {...props} data-testid="empty-self">
      <path d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm0 16.2a7.2 7.2 0 1 1 7.2-7.2 7.21 7.21 0 0 1-7.2 7.2Z" />
    </svg>
  );
}

export default EmptyDot;
