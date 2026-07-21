import './gallery.css'

export default function ImageGallery() {

    return (

        <div className={"gallery"}>
            <img className={"gallery-img"} src={"portrait2.jpg"} alt={"Gallery Image"} />
            <img className={"gallery-img"} src={"portrait3.jpg"} alt={"Gallery Image"} />
        </div>
    )
}