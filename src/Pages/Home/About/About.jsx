import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row justify-center items-center">
                    <div className="w-1/2 relative lg:-mt-12">
                        <img src={person} className="w-3/4 lg:h-[350px] rounded-lg shadow-2xl" />
                        <img src={parts} className="w-1/2 lg:h-[250px] border-8 border-white absolute right-5 top-1/2 rounded-lg shadow-2xl" alt="" />
                    </div>
                    <div className="w-1/2 space-y-7 mt-8 lg:mt-0">
                        <h3 className="text-[#FF3811] text-2xl font-bold">About Us</h3>
                        <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                        <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. </p>
                        <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. </p>
                        <button className="btn btn-secondary">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;