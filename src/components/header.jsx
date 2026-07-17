import './header.css'

export default function ImageBanner() {

	return (

        <div className={"ImageBanner"}>
            <div className="image-stack">

                <div className="image-stack-item portrait">
                    <img src={'portrait.jpg'} alt="Website Portrait"/>
                </div>

                <div className="image-stack-item banner">
                    <img src={'banner.jpg'} alt="Website Banner Image"/>
                </div>

            </div>
        </div>

		)
}