
import { FC } from 'react';

const HomePageWrapper: FC = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-[1440px]">
                <div className="flex justify-center items-center h-screen">
                    <div className="flex-col justify-center items-center">
                        <h3 className='text-gray text-[50px]'>
                            Hello World
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageWrapper;
