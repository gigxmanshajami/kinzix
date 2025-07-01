import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
function page() {
    return (
        <div className="min-h-screen flex flex-col space-grotesk">
            {/* Contact Section */}
            <section className="flex flex-col lg:flex-row  justify-between lg:px-[150px] px-10 md:px-20 py-16 gap-12 bg-[#e6eefe]">
                {/* Left */}
                <div className="flex-1 space-y-6 flex flex-col justify-center">
                    <h2 className="text-6xl font-bold text-gray-800">Contact Us</h2>
                    <p className="text-gray-600 text-md w-[62%]">
                        Email, call, or complete the form to learn how kinzix can solve your messaging problem.
                    </p>
                    <div className="space-y-2">
                        <p className="text-gray-800">info@kinzix.io</p>
                        <p className="text-gray-800">321-221-231</p>
                        <a href="#" className="text-blue-600 underline">Customer Support</a>
                    </div>

                    <div className="text-sm text-gray-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div>
                            <strong className='text-[#000]'>Customer Support</strong>
                            <p>Our support team is available around the clock.</p>
                        </div>
                        <div>
                            <strong className='text-[#000]'>Feedback and Suggestions</strong>
                            <p>Help shape kinzix by sharing your ideas.</p>
                        </div>
                        <div>
                            <strong className='text-[#000]'>Legal Inquiries</strong>
                            <p>For legal, contact legal@kinzix.com.</p>
                        </div>
                    </div>
                </div>

                {/* Right - Form */}
                <div className="flex-1 bg-white rounded-xl shadow-lg p-8  w-full max-w-md mx-auto">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Get in Touch</h3>
                    <form className="space-y-4">
                        <div className="flex gap-4">
                            <input type="text" placeholder="First name" className="w-1/2 px-4 py-2 border rounded-md text-black" />
                            <input type="text" placeholder="Last name" className="w-1/2 px-4 py-2 border rounded-md text-black" />
                        </div>
                        <input type="email" placeholder="Your email" className="w-full px-4 py-2 border rounded-md text-black" />
                        <input type="tel" placeholder="Phone number" className="w-full px-4 py-2 border rounded-md text-black" />
                        <textarea placeholder="How can we help?" className="w-full px-4 py-2 border rounded-md text-black"></textarea>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                        >
                            Submit
                        </button>
                        <p className="text-xs text-gray-500 text-center">
                            By contacting us, you agree to our <a href="#" className="underline text-black font-bold">Terms</a> and <a href="#" className="underline  text-black font-bold">Privacy Policy</a>.
                        </p>
                    </form>
                </div>
            </section>
            
            {/* Location Map + FAQ */}
            <section className="lg:px-[150px] px-10 md:px-20 py-16 bg-white grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <iframe
                        title="kinzix Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.1740624868125!2d85.35423017390154!3d23.98962977955284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f49c036234b4b5%3A0x728ed0818fb5a8b8!2sDr%20Zakir%20Hussain%20Rd%2C%20Hazaribagh%2C%20Jharkhand%20825301!5e0!3m2!1sen!2sin!4v1751391140020!5m2!1sen!2sin"
                        className="w-full h-[484px] rounded-xl border outline-none"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>

                <div className="space-y-4 flex justify-center flex-col">
                    <h4 className="text-xl text-black font-medium">Our Location</h4>
                    <h2 className="text-4xl font-bold text-gray-800">Connecting Near and Far</h2>
                    <h3 className="text-xl font-medium text-gray-800">Headquaters</h3>

                    <div className="text-gray-600">
                        <p>kinzix.com</p>
                        <p>Hazaribagh,Jharkhand</p>
                        <p>Dr Zakir Hussain Road</p>
                        <p>India</p>
                    </div>
                </div>


            </section>
            {/* FAQ Section */}
            <section className="lg:px-[150px] px-10 md:px-20 py-16 bg-white grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left - Email Subscribe */}
                <div className="space-y-4">
                    <h4 className=" text-black text-2xl font-medium">FAQ</h4>
                    <h2 className="text-5xl font-bold text-black">Do you have any questions for us?</h2>
                    <p className="text-gray-600 text-sm">
                        If there are questions you want to ask, we will answer all your questions.
                    </p>
                    <div className="flex items-center gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-4 border text-black outline-none border-gray-300 rounded-full text-sm w-full max-w-xs"
                        />
                        <button className="bg-blue-600 w-[10em] text-white px-4 py-4  rounded-full text-sm cursor-pointer transition-all hover:scale-110">
                            Submit
                        </button>
                    </div>
                </div>

                {/* Right - Accordion */}
                <div>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full text-black transition-all"
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger><span className='text-2xl font-medium'>Product Information</span></AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-black text-balance">
                                <p>
                                    Our flagship product combines cutting-edge technology with sleek
                                    design. Built with premium materials, it offers unparalleled
                                    performance and reliability.
                                </p>
                                <p>
                                    Key features include advanced processing capabilities, and an
                                    intuitive user interface designed for both beginners and experts.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger><span className='text-2xl font-medium'>Product Information</span></AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-black text-balance">
                                <p>
                                    Our flagship product combines cutting-edge technology with sleek
                                    design. Built with premium materials, it offers unparalleled
                                    performance and reliability.
                                </p>
                                <p>
                                    Key features include advanced processing capabilities, and an
                                    intuitive user interface designed for both beginners and experts.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger><span className='text-2xl font-medium'>Product Information</span></AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-black text-balance">
                                <p>
                                    Our flagship product combines cutting-edge technology with sleek
                                    design. Built with premium materials, it offers unparalleled
                                    performance and reliability.
                                </p>
                                <p>
                                    Key features include advanced processing capabilities, and an
                                    intuitive user interface designed for both beginners and experts.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger><span className='text-2xl font-medium'>Product Information</span></AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-black text-balance">
                                <p>
                                    Our flagship product combines cutting-edge technology with sleek
                                    design. Built with premium materials, it offers unparalleled
                                    performance and reliability.
                                </p>
                                <p>
                                    Key features include advanced processing capabilities, and an
                                    intuitive user interface designed for both beginners and experts.
                                </p>
                            </AccordionContent>
                        </AccordionItem>


                        {/* <AccordionItem value="item-2">
                            <AccordionTrigger>Shipping Details</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-black text-balance">
                                <p>
                                    We offer worldwide shipping through trusted courier partners.
                                    Standard delivery takes 3-5 business days, while express shipping
                                    ensures delivery within 1-2 business days.
                                </p>
                                <p>
                                    All orders are carefully packaged and fully insured. Track your
                                    shipment in real-time through our dedicated tracking portal.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Return Policy</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-black text-balance">
                                <p>
                                    We stand behind our products with a comprehensive 30-day return
                                    policy. If you&apos;re not completely satisfied, simply return the
                                    item in its original condition.
                                </p>
                                <p>
                                    Our hassle-free return process includes free return shipping and
                                    full refunds processed within 48 hours of receiving the returned
                                    item.
                                </p>
                            </AccordionContent>
                        </AccordionItem> */}
                    </Accordion>
                </div>
            </section>
        </div>
    )
}

export default page