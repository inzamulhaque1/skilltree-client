import { useLoaderData } from "react-router-dom";

const Status = () => {
    const tutorials = useLoaderData();
    
    const uniqueLanguages = new Set(tutorials.map(user => user.language));
    const uniqueReview = new Set(tutorials.map(user => user.review));

    // Get the count of unique languages
    const languageCount = uniqueLanguages.size;
    const reviewCount = uniqueReview.size;

    console.log(`Total unique reviews: ${reviewCount}`); // Corrected the message
    console.log(`Languages: ${Array.from(uniqueLanguages).join(', ')}`);

    return (
        <div>
            All tutors: {tutorials.length} <br />
            Languages: {languageCount} <br />
            Reviews: {reviewCount} <br />
        </div>
    );
};

export default Status;
