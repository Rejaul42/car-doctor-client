import { AiOutlineArrowRight } from "react-icons/ai";
const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl w-[300px] h-[200px]" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions flex items-center justify-between">
                        <p className="font-bold text-[#FF3811]">Price: ${price}</p>
                        <button className="text-2xl text-[#FF3811] ">
                            <AiOutlineArrowRight></AiOutlineArrowRight>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;