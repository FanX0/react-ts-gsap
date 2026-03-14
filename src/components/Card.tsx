import React from "react";

interface CardProps {
  title: string;
  description: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, description, className = "" }) => {
  return (
    <div className={`card ${className}`}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
