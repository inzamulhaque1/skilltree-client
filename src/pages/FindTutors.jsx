import { useLoaderData } from "react-router-dom";
import TutorialCard from "../components/TutorialCard";


const FindTutors = () => {

    const tutorials = useLoaderData()


    return (
        <div className="dark:bg-gray-800 dark:text-white relative w-9/12 mx-auto">
            Find Tutors: {tutorials.length}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    tutorials.map(tutorial => <TutorialCard key={tutorial._id} tutorial={tutorial}> </TutorialCard>)
                }
            </div>
        </div>
    );
};

export default FindTutors;