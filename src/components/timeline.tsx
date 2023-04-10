import React from "react";

type TimelineItemProps = {
  date: string;
  title: string;
  description: string;
  isLast?: boolean;
};

const TimelineItem = ({ date, title, description, isLast }: TimelineItemProps) => {
  return (
    <div className={`flex ${isLast ? "" : "mb-8"} w-full`}>
      <div className="w-7 mr-2">
        <div className="h-full border-2 border-gray-600"></div>
        <div className="w-2 h-2 mt-1 rounded-full bg-gray-600"></div>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-bold text-lg">{title}</h2>
          <span className="text-gray-600">{date}</span>
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <TimelineItem
        date="June 2021"
        title="Lorem ipsum dolor sit amet"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <TimelineItem
        date="July 2021"
        title="Lorem ipsum dolor sit amet"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <TimelineItem
        date="August 2021"
        title="Lorem ipsum dolor sit amet"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <TimelineItem
        date="September 2021"
        title="Lorem ipsum dolor sit amet"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        isLast
      />
    </div>
  );
};

export default Timeline;