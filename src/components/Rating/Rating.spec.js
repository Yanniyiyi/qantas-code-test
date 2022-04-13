import { render, screen, rerender } from '@testing-library/react';
import Rating from './Rating';
import { FullDot, HalfDot, EmptyDot } from "./SelfRatingIcons";
describe('Component: Rating', () => {

  test('it should render default start rating correclty', () => {
    const {rerender} = render(<Rating score={3.5}/>);
    expect(screen.getAllByTestId('full-star')).toHaveLength(3);
    expect(screen.getAllByTestId('half-star')).toHaveLength(1);
    expect(screen.getAllByTestId('empty-star')).toHaveLength(1);
    rerender(<Rating score={4} ratingType="star"/>)
    expect(screen.getAllByTestId('full-star')).toHaveLength(4);
    expect(screen.queryAllByTestId('half-star')).toHaveLength(0);
    expect(screen.getAllByTestId('empty-star')).toHaveLength(1);
  });

  test('it should render self rating correclty', () => {
    const {rerender} = render(<Rating score={3.5} ratingType="self"/>);
    expect(screen.getAllByTestId('full-self')).toHaveLength(3);
    expect(screen.getAllByTestId('half-self')).toHaveLength(1);
    expect(screen.getAllByTestId('empty-self')).toHaveLength(1);
    rerender(<Rating score={4} ratingType="self"/>)
    expect(screen.getAllByTestId('full-self')).toHaveLength(4);
    expect(screen.queryAllByTestId('half-self')).toHaveLength(0);
    expect(screen.getAllByTestId('empty-self')).toHaveLength(1);
   });

   test('it should render customized rating icon correclty', () => {
    const {rerender} = render(<Rating score={3.5} ratingIconGroup={{
      HALF: HalfDot,
      EMPTY: EmptyDot,
      FULL: FullDot,
    }}/>);
    expect(screen.getAllByTestId('full-self')).toHaveLength(3);
    expect(screen.getAllByTestId('half-self')).toHaveLength(1);
    expect(screen.getAllByTestId('empty-self')).toHaveLength(1);
    rerender(<Rating score={4} ratingType="self"/>)
    expect(screen.getAllByTestId('full-self')).toHaveLength(4);
    expect(screen.queryAllByTestId('half-self')).toHaveLength(0);
    expect(screen.getAllByTestId('empty-self')).toHaveLength(1);
   });
});