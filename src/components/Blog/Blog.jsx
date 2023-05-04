

const Blog = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">Questions and Answers</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Q1: Tell us the differences between uncontrolled and controlled components.</h2>
                    <div className="bg-gray-200 h-32 p-1 rounded-md text-sm">Ans: In React, controlled components refer to components that have their state and behavior controlled by the parent component.  Uncontrolled components refer to components that manage their own state internally.</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Q2: How to validate React props using PropTypes</h2>
                    <div className="bg-gray-200 h-32 p-1 text-sm rounded-md">Ans: propTypes is used for props validation. If some of the props are not using the correct type that we assigned, we will get a console warning. After we specify validation patterns, we will set App.</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Q3: Tell us the difference between nodejs and express js.</h2>
                    <div className="bg-gray-200 h-32 p-1 text-sm rounded-md"> NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Q4: What is a custom hook, and why will you create a custom hook?</h2>
                    <div className="bg-gray-200 h-32 p-1 text-sm rounded-md">Ans:Custom React JS hooks offer reusability as when a custom hook is created. It enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code. </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;