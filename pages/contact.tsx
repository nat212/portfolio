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
        return (
            <>
                <h1 className="text-3xl mb-5">Contact Me</h1>
                <form className="flex flex-col space-y-2.5 md:w-1/4" onSubmit={this.handleSubmit}>
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
                    <div className="flex flex-col">
                        <label htmlFor="name">Name *</label>
                        <input id="name" name="name" className="form-input" type="text" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email">Email Address *</label>
                        <input id="email" name="email" className="form-input" type="email" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="subject">Subject *</label>
                        <input id="subject" name="subject" className="form-input" type="text" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message">Message *</label>
                        <textarea id="message" name="message" className="form-input" required />
                    </div>
                    <button type="submit" className="btn-primary">
                        Submit
                    </button>
                </form>
            </>
        );
    }
}
