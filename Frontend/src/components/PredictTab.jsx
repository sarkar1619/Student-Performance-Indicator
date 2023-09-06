function InputForm() {
    return (
        <div className="flex items-center justify-center h-auto pt-5">
            <div className="w-full max-w-md">
                <form
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    action="{{url_for('predict_datapoint')}}"
                    method="post"
                >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Gender
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="gender"
                            placeholder="Enter you Gender"
                            required
                        >
                            <option selected disabled value="">
                                -- Select your gender --
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Race/Ethnicity
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="race_ethnicity"
                            placeholder="Enter you ethnicity"
                            required
                        >
                            <option
                                className="placeholder"
                                selected
                                disabled
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
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Parental Level of Education
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="parental_level_of_education"
                            placeholder="Enter you Parent Education"
                            required
                        >
                            <option
                                className="placeholder"
                                selected
                                disabled
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
                            <option value="some college">Some College</option>
                            <option value="some high school">
                                Some High School
                            </option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Lunch Type
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="lunch"
                            placeholder="Enter you Lunch"
                            required
                        >
                            <option
                                className="placeholder"
                                selected
                                disabled
                                value=""
                            >
                                -- Select lunch type --
                            </option>
                            <option value="free/reduced">Free/Reduced</option>
                            <option value="standard">Standard</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Test preparation Course
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="test_preparation_course"
                            placeholder="Enter you Course"
                            required
                        >
                            <option
                                className="placeholder"
                                selected
                                disabled
                                value=""
                            >
                                -- Select test course --
                            </option>
                            <option value="none">None</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Writing Score (out of 100)
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            name="writing_score"
                            placeholder="Enter your Writing Score"
                            min="0"
                            max="100"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Reading Score (out of 100)
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            name="reading_score"
                            placeholder="Enter your Reading Score"
                            min="0"
                            max="100"
                        />
                    </div>
                    <div className="">
                        <input
                            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            value="Predict Score"
                            required
                        />
                    </div>
                    {/* <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border hover:border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                        /> */}
                        {/* <p className="text-red-500 text-xs italic">
                            Please choose a password.
                        </p> */}
                    {/* </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Sign In
                        </button>
                        <a
                            className="inline-block align-baseline font-bold text-sm text-teal-400 hover:text-teal-600"
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div> */}
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default InputForm;
