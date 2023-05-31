import classNames from "classnames";
import { useId } from "react";

type Props = {
  rating: number;
};

export const RatingStars = ({ rating }: Props) => {
  const starWidth = 24;

  const id = useId();

  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => {
        // The rating is out of 5, so we need to calculate the percentage
        const ratingPercentage = (rating / 5) * 100;
        const minPercentage = (star - 1) * 20;

        // How much of the star should be filled?
        const starFillPercentage =
          ((ratingPercentage - minPercentage) / 20) * 100;

        const gradientId = `${id}-gradient-${star}`;

        return (
          <div
            key={star}
            style={{
              width: `${starWidth}px`,
              height: `${starWidth}px`,
            }}
          >
            <svg fill="currentColor" viewBox={`0 0 ${starWidth} ${starWidth}`}>
              <svg viewBox="0 0 1024 1024" fill="currentColor">
                <defs>
                  <linearGradient
                    id={gradientId}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="yellow" />
                    <stop
                      offset={`${starFillPercentage - 0.1}%`}
                      stopColor="yellow"
                    />
                    <stop
                      offset={`${starFillPercentage + 0.1}%`}
                      stopColor="grey"
                    />
                    <stop offset="100%" stopColor="grey" />
                  </linearGradient>
                </defs>
                <path
                  fill={`url(#${gradientId})`}
                  d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
                />
              </svg>
            </svg>
          </div>
        );
      })}
    </div>
  );
};
