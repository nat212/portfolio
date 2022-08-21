import { NextPage } from 'next';
import Layout from '@components/layout';

const Contact: NextPage = () => {
    const inputClass = 'rounded-md border-gray-300 shadow-sm text-black';
    return (
        <Layout activePage='/contact' pageTitle='Contact'>
            <h1 className='text-3xl mb-5'>Contact Me</h1>
            <form className='flex flex-col space-y-2.5'>
                <input className={inputClass} type='text' placeholder='Name *' required />
                <input className={inputClass} type='email' placeholder='Email Address *' required />
                <input className={inputClass} type='text' placeholder='Subject *' required />
                <textarea className={inputClass} placeholder='Message *' required />
                <button type='submit' className='bg-pink-600 p-2 rounded-md'>
                    Submit
                </button>
            </form>
        </Layout>
    );
};

export default Contact;
