import React from 'react';
import cn from 'classnames';

enum ContactStatus {
    OK,
    ERROR,
}

interface ContactState {
    status: ContactStatus;
    message?: string;
}

export default class Contact extends React.Component<void, ContactState> {
    static get pageTitle(): string {
        return 'Contact';
    }

    state: ContactState = {
        status: ContactStatus.OK,
    };

    private handleSubmit = async (event: any) => {
        event.preventDefault();
        const data = {
            name: event.target.name.value,
            subject: event.target.subject.value,
            email: event.target.email.value,
            message: event.target.message.value,
        };
        const endpoint = '/api/contact';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };

        const response = await fetch(endpoint, options);
        const result: { message: string } = await response.json();
        this.setState({
            status: response.ok ? ContactStatus.OK : ContactStatus.ERROR,
            message: result.message,
        });
    };

    render() {
        const inputClass = 'rounded-md border-gray-300 shadow-sm text-black';
        return (
            <>
                <h1 className='text-3xl mb-5'>Contact Me</h1>
                <form className='flex flex-col space-y-2.5' onSubmit={this.handleSubmit}>
                    {this.state.message ? (
                        <div
                            className={`${cn({
                                'bg-red-800': this.state.status === ContactStatus.ERROR,
                                'bg-green-800': this.state.status === ContactStatus.OK,
                            })} p-2 rounded-md text-white`}
                        >
                            {this.state.message}
                        </div>
                    ) : null}
                    <input name='name' className={inputClass} type='text' placeholder='Name *' required />
                    <input name='email' className={inputClass} type='email' placeholder='Email Address *' required />
                    <input name='subject' className={inputClass} type='text' placeholder='Subject *' required />
                    <textarea name='message' className={inputClass} placeholder='Message *' required />
                    <button type='submit' className='bg-pink-600 p-2 rounded-md'>
                        Submit
                    </button>
                </form>
            </>
        );
    }
}
