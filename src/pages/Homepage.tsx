import { FC } from "react";
import Header from "../components/Header";


const Homepage: FC = () => {

    return (
        <>
            <Header isHome={true}/>

            <div className="px-5 pt-2 flex justify-between text-ceil">
                <div className="px-5 py-4">
                    {
                        loading ? 
                            <div>
                                <p>Loading...</p>
                            </div>
                            :
                            <div className={`px-5 py4 grid ${isSingleGrid ? "grid-cols-1" : "grid-cols-2"} gap-5`}>

                            </div>
                    }

                </div>

            </div>
        </>
    )
}

export default Homepage