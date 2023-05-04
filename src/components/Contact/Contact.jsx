

const Contact = () => {
    return (
        <div>
            <div>
                <section className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h1>
                            <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ante euismod, faucibus libero sed, bibendum sapien. Fusce dignissim ullamcorper diam, eu volutpat est pulvinar at.</p>
                            <p className="text-lg mb-4">Email: info@yourdomain.com</p>
                            <p className="text-lg mb-4">Phone: 555-555-5555</p>
                            <p className="text-lg mb-4">Address: 123 Main Street, Anytown, USA</p>
                        </div>
                        <div>
                            <form className="flex flex-col">
                                <label className="text-lg font-bold mb-2" htmlFor="name">Name</label>
                                <input className="border-2 border-gray-400 py-2 px-3 mb-4 rounded-lg" type="text" id="name" name="name" placeholder="Your Name" />
                                <label className="text-lg font-bold mb-2" htmlFor="email">Email</label>
                                <input className="border-2 border-gray-400 py-2 px-3 mb-4 rounded-lg" type="email" id="email" name="email" placeholder="Your Email" />
                                <label className="text-lg font-bold mb-2" htmlFor="message">Message</label>
                                <textarea className="border-2 border-gray-400 py-2 px-3 mb-4 rounded-lg" id="message" name="message" rows="5" placeholder="Your Message"></textarea>
                                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">Send</button>
                            </form>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Contact;