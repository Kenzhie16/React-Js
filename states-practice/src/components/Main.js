import Login from './Login'

function Main() {
    return (
        <>
            <div className="main-body">
                <div className="row">
                    <div className='col-8'>
                        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="1000">
                            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*" className="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item" data-bs-interval="1000">
                            <img src="https://www.thesprucepets.com/thmb/7TDhfkK5CAKBWEaJfez6607J48Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item" data-bs-interval="1000">
                            <img src="https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTc4NDMyMDQ3Nzg1ODUy/golden-retriever.jpg" className="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item" data-bs-interval="1000">
                            <img src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item" data-bs-interval="1000">
                            <img src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.15752-9/328551026_930698651635535_2016130971554151717_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGE8XpXdLtmAGqYdNsLvrR53zi9_BkusgffOL38GS6yB5ITCw8Ls0qHFehmvCPAEsHjXBK3DcDDJZIDDM9VegrE&_nc_ohc=UGvk220DnA4AX_aaXVX&_nc_oc=AQnwjfCt1bKY_FoMOWfzsfT1errb9uS12cOtwEO0iW_6NodCkbaXR3AVzpO2UTPbtBM8ekzsuBFfLBFEeH3rkvbh&tn=XEWmaDQI6K-ZrrOX&_nc_ht=scontent.fmnl4-2.fna&oh=03_AdQ-ywD0Pwr1NLLb_uN6X9ww5jBsx_1AjkPbOdjX8RiHcA&oe=6400275B" className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='row'>
                            <div className='col-6'>
                                <Login/>
                            </div>
                            <div className='col-6'>
                                    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/551/676/small/shy-dog-logo-illustration-depicting-shy-dog-suitable-for-pet-company-free-vector.jpg"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        
        </>

    )
}

export default Main;