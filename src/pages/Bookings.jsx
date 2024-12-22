import { useEffect, useState } from "react";

const Bookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/book')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setBookings(data);
                } else {
                    console.error('Expected bookings data to be an array');
                }
            })
            .catch(error => console.error('Error fetching bookings:', error));
    }, []);

    if (!Array.isArray(bookings)) {
        return <div className="text-center text-gray-500">No bookings found.</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Bookings</h1>
            {bookings.length === 0 ? (
                <p className="text-center text-xl text-gray-600">No bookings available</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bookings.map(booking => (
                        <div key={booking._id} className="bg-white rounded-lg shadow-md overflow-hidden p-6">
                            <img
                                src={booking.image || 'https://via.placeholder.com/150'}
                                alt={booking.language}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{booking.language}</h3>
                            <p className="text-sm text-gray-600 mb-2"><strong>Name:</strong> {booking.name}</p>
                            <p className="text-sm text-gray-600 mb-2"><strong>Price:</strong> ${booking.price}</p>
                            <p className="text-sm text-gray-600"><strong>Tutor:</strong> {booking.tutorEmail}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Bookings;
