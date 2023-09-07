import { useState } from "react";
import Modal from "./Modal";

const PredictTab = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <div className={`flex items-center justify-center h-auto pt-5 ${isModalOpen && "blur-sm"}`}>
                <div className="w-full max-w-md">
                    <form
                        className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-6 mb-4"
                    >
                        {/* 1. Gender */}
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="gender"
                            >
                                Gender
                            </label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer focus:border-slate-800 hover:border-slate-800"
                                id="gender"
                                name="gender"
                                placeholder="Enter you Gender"
                                required
                            >
                                <option selected disabled hidden value="">
                                    -- Select your gender --
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        {/* 2. Race/Ethnicity */}
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="race_ethnicity"
                            >
                                Race/Ethnicity
                            </label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer focus:border-slate-800 hover:border-slate-800"
                                id="race_ethnicity"
                                name="race_ethnicity"
                                placeholder="Enter you ethnicity"
                                required
                            >
                                <option
                                    className="placeholder"
                                    selected
                                    disabled
                                    hidden
                                    value=""
                                >
                                    -- Select your ethnicity --
                                </option>
                                <option value="group A">Group A</option>
                                <option value="group B">Group B</option>
                                <option value="group C">Group C</option>
                                <option value="group D">Group D</option>
                                <option value="group E">Group E</option>
                            </select>
                        </div>

                        {/* 3. Parental Level of Education */}
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="parental_level_of_education"
                            >
                                Parental Level of Education
                            </label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer focus:border-slate-800 hover:border-slate-800"
                                id="parental_level_of_education"
                                name="parental_level_of_education"
                                placeholder="Enter you Parent Education"
                                required
                            >
                                <option
                                    className="placeholder"
                                    selected
                                    disabled
                                    hidden
                                    value=""
                                >
                                    -- Select parental education --
                                </option>
                                <option value="associate's degree">
                                    Associate&apos;s Degree
                                </option>
                                <option value="bachelor's degree">
                                    Bachelor&apos;s Degree
                                </option>
                                <option value="high school">High school</option>
                                <option value="master's degree">
                                    Master&apos;s Degree
                                </option>
                                <option value="some college">
                                    Some College
                                </option>
                                <option value="some high school">
                                    Some High School
                                </option>
                            </select>
                        </div>

                        {/* 4. Lunch Type */}
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="lunch"
                            >
                                Lunch Type
                            </label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer focus:border-slate-800 hover:border-slate-800"
                                id="lunch"
                                name="lunch"
                                placeholder="Enter you Lunch"
                                required
                            >
                                <option
                                    className="placeholder"
                                    selected
                                    disabled
                                    hidden
                                    value=""
                                >
                                    -- Select lunch type --
                                </option>
                                <option value="free/reduced">
                                    Free/Reduced
                                </option>
                                <option value="standard">Standard</option>
                            </select>
                        </div>

                        {/* 5. Test Preparation Course */}
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="test_preparation_course"
                            >
                                Test preparation Course
                            </label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer focus:border-slate-800 hover:border-slate-800"
                                id="test_preparation_course"
                                name="test_preparation_course"
                                placeholder="Enter you Course"
                                required
                            >
                                <option
                                    className="placeholder"
                                    selected
                                    disabled
                                    hidden
                                    value=""
                                >
                                    -- Select test course --
                                </option>
                                <option value="none">None</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>

                        {/* 6. Writing Score */}
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="writing_score"
                            >
                                Writing Score (out of 100)
                            </label>
                            <input
                                className="shadow [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer focus:border-slate-800 hover:border-slate-800"
                                type="number"
                                id="writing_score"
                                name="writing_score"
                                placeholder="Enter your Writing Score"
                                min="0"
                                max="100"
                            />
                        </div>

                        {/* 7. Reading Score */}
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="reading_score"
                            >
                                Reading Score (out of 100)
                            </label>
                            <input
                                className="shadow [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer focus:border-slate-800 hover:border-slate-800"
                                type="number"
                                id="reading_score"
                                name="reading_score"
                                placeholder="Enter your Reading Score"
                                min="0"
                                max="100"
                            />
                        </div>

                        {/* Submit Button: (Predict Score) */}
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded cursor-pointer focus:outline-none focus:shadow-outline"
                                onClick={() => {
                                    setIsModalOpen(true);
                                }}
                                type="button"
                            >
                                Predict Score
                            </button>
                            <button className="inline-block align-baseline font-bold text-base pr-3 text-blue-500 hover:text-blue-800">
                                Reset
                            </button>
                        </div>
                    </form>
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2020 Acme Corp. All rights reserved.
                    </p>
                </div>
            </div>
            {isModalOpen ? <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> : null}
        </>
    );
};

export default PredictTab;
