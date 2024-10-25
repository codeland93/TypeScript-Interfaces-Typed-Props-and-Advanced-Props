import React from 'react';

// Task 1: Define the UserInfoProps interface
interface UserInfoProps {
    username: string;
    age: number;
    email: string;
}

// Task 2: Implement the UserInfo component
const UserInfo: React.FC<UserInfoProps> = ({ username, age, email }) => {
    return (
        <div>
            <h2>User Information</h2>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Email:</strong> {email}</p>
        </div>
    );
};

export default UserInfo;
