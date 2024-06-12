import {Component} from "react";

export class About extends Component {
    render() {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="p-8 m-8 bg-white rounded-lg shadow-lg mt-[100px] mb-[100px]">
                    <h2 className="pb-4 text-4xl font-bold text-center text-neonBlue border-b-2 border-blue-200">About
                        Us</h2>
                    <p className="pt-4 text-lg text-gray-700 leading-relaxed">
                        At Mobile Shop, we believe in the power of technology to connect, inspire, and improve lives.
                        Our journey
                        began with a simple yet profound realization: the importance of embracing innovative technology
                        for the
                        well-being of both individuals and society.
                    </p>
                    <p className="pt-4 text-lg text-gray-700 leading-relaxed">
                        <strong>Mission : </strong> Our mission is to make cutting-edge technology accessible to all,
                        fostering a
                        harmonious relationship between people and the digital world. We are committed to offering a
                        diverse range of high-quality, ethically sourced, and sustainable products that promote
                        connectivity,
                        efficiency, and a tech-savvy lifestyle.
                    </p>
                    <div className="pt-6">
                        <h3 className="text-2xl font-semibold text-neonBlue">Our Values</h3>
                        <ul className="list-disc list-inside pt-2 text-lg text-gray-700 leading-relaxed">
                            <li>Innovation: Pushing the boundaries of technology to bring you the latest and greatest
                                products.
                            </li>
                            <li>Sustainability: Prioritizing eco-friendly practices to protect our planet.</li>
                            <li>Quality: Offering only the best products that meet our rigorous standards.</li>
                            <li>Community: Building a supportive community that values technological advancement.</li>
                        </ul>
                    </div>
                    <div className="pt-6">
                        <h3 className="text-2xl font-semibold text-neonBlue">Our Story</h3>
                        <p className="pt-2 text-lg text-gray-700 leading-relaxed">
                            Mobile Shop started as a small family-owned business with a passion for mobile technology.
                            Over the years, we have grown into a well-respected brand known for our commitment to
                            quality and sustainability. Our dedication to tech innovation has been the driving force
                            behind our success, and we continue to innovate and expand our product range to meet the
                            needs of our customers.
                        </p>
                    </div>
                    <div className="pt-6">
                        <h3 className="text-2xl font-semibold text-neonBlue">Join Us</h3>
                        <p className="pt-2 text-lg text-gray-700 leading-relaxed">
                            We invite you to join us on our journey towards a smarter and more connected future.
                            Whether you're new to mobile technology or a seasoned enthusiast, we have something for
                            everyone. Explore our range of products, connect with our community, and be a part of the
                            Mobile Shop family.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}