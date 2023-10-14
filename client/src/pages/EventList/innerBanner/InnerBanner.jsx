import Breadcrumb from "../../../components/Shared/Breadcrumb";


const InnerBanner = () => {

    return (
        <>
            <section
                className="inner_banner"
            >

                <div
                    className="relative mx-auto  px-4 py-32 sm:px-6 flex items-center justify-center lg:px-8"
                >
                    <div className="max-w-xl text-center ">
                        <h1 className="text-3xl font-extrabold sm:text-5xl text-white drop-shadow-lg shadow-black">
                            Event List
                        </h1>
                        <Breadcrumb name="Event List" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default InnerBanner;
