import React, { useState } from 'react';

function UserGreeting() {
    const [booked, setBooked] = useState(false);

    const handleBookTicket = () => {
        setBooked(true);
        alert('Ticket booked successfully!');
    };

    return (
        <div>
            <h2>Welcome back!</h2>
            <p>You can now book flight tickets.</p>
            {booked ? (
                <p style={{color: 'green'}}>
                    ✅ Your ticket has been booked!
                </p>
            ) : (
                <button onClick={handleBookTicket}>
                    Book Ticket
                </button>
            )}
        </div>
    );
}

export default UserGreeting;