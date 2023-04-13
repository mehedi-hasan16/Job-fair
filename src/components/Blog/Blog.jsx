import React from 'react';

const Blog = () => {
    return (
        <div className='mx-6 min-h-screen'>
           <div className='mb-5 border border-purple-400 rounded bg-purple-50'>
            <p className='font-bold text-xl mb-2 p-3'>1. When should we use context api</p>
            <p className='p-3'>Answer: Context api is react structure , when some data need to be access from many components at different nesting levels this time we use context api.</p>
           </div>
           <div className='mb-5 border border-purple-400 rounded bg-purple-50'>
           <p className='font-bold text-xl mb-2 p-3'>2. What is custom hook</p>
            <p className='p-3'>Answer: Hook is reuseable function. when a project has components logic that need to use by multiple components, we can implement that logic to a custom hook.</p>
           </div>
           <div className='mb-5 border border-purple-400 rounded bg-purple-50'>
           <p className='font-bold text-xl mb-2 p-3'>3. What is useRef</p>
            <p className='p-3'>Answer: useRef is build in react hook. it allows to persist value between renders. it can use store value that does not need re render when updated.</p>
           </div>
           <div className='mb-5 border border-purple-400 rounded bg-purple-50'>
           <p className='font-bold text-xl mb-2 p-3'>4. What is UseMemo</p>
            <p className='p-3'>Answer: useMemo hook returns a memoized value. so that we dont need to calling the function on every render.</p>
           </div>
        </div>
    );
};

export default Blog;