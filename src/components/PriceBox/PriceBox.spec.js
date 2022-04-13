import { render, screen } from '@testing-library/react';
import PriceBox from './PriceBox';

describe('Component: PriceBox', () => {

  test('it should render price correclty', () => {
    const {rerender} = render(<PriceBox price={350} saving={50} currency='AUD'/>);
    expect(screen.getByText(/350/i)).toBeInTheDocument();
    expect(screen.getByText(/save/i)).toBeInTheDocument();
    expect(screen.getByText('$')).toBeInTheDocument();
    expect(screen.getByText('Save $50')).toBeInTheDocument();
    rerender(<PriceBox price={350} currency='AUD'/>);
    expect(screen.queryByText('Save $50')).not.toBeInTheDocument();
  });
});