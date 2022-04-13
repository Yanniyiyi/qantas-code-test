import { FullStar, HalfStar, EmptyStar } from "./StarRatingIcons";
import { FullDot, HalfDot, EmptyDot } from "./SelfRatingIcons";

const RATING_ICONS_OPTIONS = {
  star: {
    HALF: HalfStar,
    EMPTY: EmptyStar,
    FULL: FullStar,
  },
  self: {
    HALF: HalfDot,
    EMPTY: EmptyDot,
    FULL: FullDot,
  },
};

function Rating({ score, maxScore = 5, ratingType = "star", ratingIconGroup }) {
  const numberOfFullIcon = Math.floor(score);
  const numberOfHalfIcon = Math.round(score) - numberOfFullIcon;
  const numberOfEmptyIcon = maxScore - numberOfFullIcon - numberOfHalfIcon;

  const {HALF, EMPTY, FULL} = ratingIconGroup ? ratingIconGroup : RATING_ICONS_OPTIONS[ratingType];

  return (
    <div className="flex">
      {[...Array(numberOfFullIcon)].map((i, index) => {
        return (
          <FULL key={index + "full" + ratingType} />
        );
      })}
      {[...Array(numberOfHalfIcon)].map((i, index) => {
        return <HALF key={index + "half" + ratingType}/>
      })}
      {[...Array(numberOfEmptyIcon)].map((i, index) => {
        return <EMPTY key={index + "empty" + ratingType}/>
      })}
    </div>
  );
}

export default Rating;
