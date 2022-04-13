import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Select from './Select';

describe('Component: Select', () => {

  const mockOnSort = jest.fn();

  const sortOptions =  [
    {
      name: "Price low to high",
      value: 'ascending-offer.displayPrice.amount'
    },
    {
      name: "Price high to low",
      value: 'descending-offer.displayPrice.amount'
    },
  ];

  beforeEach(() => {
    render(<Select options={sortOptions} onChange={mockOnSort}></Select>)
  })

  afterAll(() => {
    cleanup();
  })

  test('it should render options correclty', () => {
   expect(screen.getByText(/price low to high/i)).toBeInTheDocument();
   expect(screen.getByText(/price high to low/i)).toBeInTheDocument();
  });

  test('it should fire onChange callback', () => {
    fireEvent.change(screen.getByTestId('select'), {target: {value: 'descending-offer.displayPrice.amount'}})
    expect(mockOnSort).toHaveBeenCalledTimes(1);
   });
});