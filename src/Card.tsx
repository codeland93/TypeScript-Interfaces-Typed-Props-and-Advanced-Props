import React from 'react';

// Task 1: Define the CardProps interface for children
interface CardProps {
    children: React.ReactNode; // This allows any valid React node as children
}

// Task 2: Implement the Card component
const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', margin: '10px 0' }}>
            {children}
        </div>
    );
};

export default Card;
