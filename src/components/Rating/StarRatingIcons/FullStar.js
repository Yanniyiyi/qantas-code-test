function FullStar({ props }) {
  return (
    <svg className="h-4 w-4 fill-yellow-400" viewBox="0 0 24 24" {...props} data-testid="full-star">
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

export default FullStar;