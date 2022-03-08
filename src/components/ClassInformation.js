function ClassInformation() {


    const checkWindowSizeForRender = () => {
        if (window.matchMedia("(max-width: 400px)").matches) {
            return mobileRender()
        } else {
            return desktopRender()
            }
    }

    const mobileRender = () => {
        return (
            <div className="text-center">
                {/* About Section */}
                <h1 className="text-center p-1"><b>About the Experiance</b></h1>
                <div className="p-3 d-flex"><h2>Refined techniques, basics 101, and innovative skill. We’re teaching you everything you need to know about hand tied extensions to start your career and upgrade your services. Hands on training by Clark + Lana, with a course curated for success. Elevate your artistry in 2022.</h2></div>
                <div><img src="https://i.ibb.co/wCYkLJK/image0-3.png" className="img-thumbnail"/></div>
                <div className="p-3 d-flex"><h2>We have created these classes with students in mind to bring you an experience like nothing before. Our extensive and ongoing training paired with our industry experience and love for the craft uniquely qualified us to give you all the tools you will need to succeed.</h2></div>
                <img src="https://i.ibb.co/MnSR4hC/image2-1.png" className="img-thumbnail"/>
                <div className="p-3 d-flex"><h2>Each class will have a limited number of seats available. We want to keep class sizes smaller so we can provide a more intentional, hands on approach. Students will benefit from asking questions both 1:1 and in a collaborative environment, the opportunity for tailored guidance, and connecting with other stylists in their community.</h2></div>
                <img src="https://i.ibb.co/p4hJhh3/image1-1.png" className="img-thumbnail"/>
                {/* What class includes */}
                <div className="container mt-5">
                    <h1><b>Introduction</b></h1>
                        <h4>Intro to products & tools</h4>
                        <h4>How to have a consultation</h4>
                    </div>
                    <div className="">
                        <h1><b>Procedure</b></h1>
                        <h4>Six hours of live, hands on training on mannequin</h4>
                        <h4>Comprehensive, step by step breakdown of the service </h4>
                        <h4>Opportunity for questions and 1:1 attention </h4>
                    </div>
                    <div className="">
                        <h1><b>Demo</b></h1>
                            <h4>A live demo by Lana for observation</h4>
                            <h4>Opportunity for questions </h4>
                            <h4>Demo of an extension move up </h4>
                    </div>
                    <div className="">
                    <h1><b>Breakdown</b></h1>
                        <h4>Sanitation of tools</h4>
                        <h4>Marketing & Social Media </h4>
                        <h4>Photography </h4>
                        <h4>Pricing overview </h4>
                        <h4>Aftercare </h4>
                        <h4>Troubleshooting </h4>
                    </div>
            </div>
        )
    }

    const desktopRender = () => {
        return (
            <div>
                <h1 className="text-center p-5"><b>About the Experiance</b></h1>
                <div className="container d-flex p-3 img-fluid">
                    <div><img src="https://i.ibb.co/wCYkLJK/image0-3.png" className="px-3 "/></div>  
                    <div className="p-3 d-flex"><h2>Refined techniques, basics 101, and innovative skill. We’re teaching you everything you need to know about hand tied extensions to start your career and upgrade your services. Hands on training by Clark + Lana, with a course curated for success. Elevate your artistry in 2022.</h2></div>
                </div>
                <div className="container d-flex p-3 img-fluid">
                    <div className="p-3 d-flex"><h2>We have created these classes with students in mind to bring you an experience like nothing before. Our extensive and ongoing training paired with our industry experience and love for the craft uniquely qualified us to give you all the tools you will need to succeed.</h2></div>
                    <div>
                        <img src="https://i.ibb.co/MnSR4hC/image2-1.png" className="px-3"/>
                    </div>
                </div>
                <div className="container p-3 d-flex img-fluid">
                    <div className="container d-flex">
                        <img src="https://i.ibb.co/p4hJhh3/image1-1.png" className="px-3"/>
                        <div className="p-3 d-flex"><h2>Each class will have a limited number of seats available. We want to keep class sizes smaller so we can provide a more intentional, hands on approach. Students will benefit from asking questions both 1:1 and in a collaborative environment, the opportunity for tailored guidance, and connecting with other stylists in their community.</h2></div>
                    </div>
                </div>
                <h2 className="text-center p-5"><b>What the Class Includes:</b></h2>

                <div className="container d-flex">
                    <div>
                        <div className="m-5">
                            <h1><ul><b>Introduction</b></ul></h1>
                                <h4>Intro to products & tools</h4>
                                <h4>How to have a consultation</h4>
                        </div>
                        <div className="m-5">
                            <h1><ul><b>Procedure</b></ul></h1>
                            <h4>Six hours of live, hands on training on mannequin</h4>
                            <h4>Comprehensive, step by step breakdown of the service </h4>
                            <h4>Opportunity for questions and 1:1 attention </h4>
                        </div>
                        <div className="m-5">
                            <h1><ul><b>Demo</b></ul></h1>
                                <h4>A live demo by Lana for observation</h4>
                                <h4>Opportunity for questions </h4>
                                <h4>Demo of an extension move up </h4>
                        </div>
                        <div className="m-5">
                            <h1><ul><b>Breakdown</b></ul></h1>
                                <h4>Sanitation of tools</h4>
                                <h4>Marketing & Social Media </h4>
                                <h4>Photography </h4>
                                <h4>Pricing overview </h4>
                                <h4>Aftercare </h4>
                                <h4>Troubleshooting </h4>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/G90p3Rj/tool-kit-open.jpg" className="container m-4 img-fluid"/>
                        <img src="https://i.ibb.co/G90p3Rj/tool-kit-open.jpg" className="container m-4 img-fluid"/>
                    </div>
                </div>
                <div className="m-5 text-center">
                    <h1><ul><b>Perks</b></ul></h1>
                    <h4>Certification of Completion</h4>
                    <h4><b>Exclusive</b> access to our private alumni Instagram account full of tips, tricks, and videos to keep up to date on techniques. The contrinued education we provide never ends!</h4>
                    <h4>Be listed in our database as a featured extension stylist in your city</h4>
                    <h4>Be the first to know about exclusive student discounts or promos on our products </h4>
                </div>
            </div>
        )
    }





    return checkWindowSizeForRender()
        
}

export default ClassInformation;


