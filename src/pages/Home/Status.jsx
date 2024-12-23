import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase.init";

const Status = () => {
    const tutorials = useLoaderData();
    const [userCount, setUserCount] = useState(0);

    // Fetch the user count from Firestore
    useEffect(() => {
        const fetchUserCount = async () => {
            try {
                const usersSnapshot = await getDocs(collection(db, "users"));
                const users = usersSnapshot.docs.map(doc => doc.data()); // Get data from documents
                setUserCount(users.length); // Set the user count based on the fetched data
            } catch (error) {
                console.error("Error fetching user count:", error);
            }
        };

        fetchUserCount();
    }, []);

    // Calculate the sum of all reviews
    const totalReviews = tutorials.reduce((sum, tutorial) => sum + (tutorial.review || 0), 0);

    // Get unique languages
    const uniqueLanguages = new Set(tutorials.map(tutorial => tutorial.language));
    const languageCount = uniqueLanguages.size;

    return (
        <div>
            All tutors: {tutorials.length} <br />
            Languages: {languageCount} <br />
            Total Reviews: {totalReviews} <br />
            Total Users: {userCount} <br /> {/* Display user count */}
        </div>
    );
};

export default Status;
