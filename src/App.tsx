import React from 'react';
import UserInfo from './UserInfo';
import Card from './Card';

const App: React.FC = () => {
    return (
        <div>
            <h1>TypeScript Interfaces and Props</h1>
            <Card>
                <UserInfo username="JohnDoe" age={30} email="johndoe@example.com" />
            </Card>
            <Card>
                <h2>Another User Info</h2>
                <UserInfo username="JaneSmith" age={25} email="janesmith@example.com" />
            </Card>
            <Card>
                <h2>Welcome to the Card Component!</h2>
                <p>This is a flexible component that can contain any content!</p>
                <button style={{ padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>
                    Click Me!
                </button>
            </Card>
        </div>
    );
};

export default App;

