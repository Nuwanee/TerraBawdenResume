import './gallery.css'
import {useEffect, useState} from "react";

function getSize(image) {
    const w = image.width;
    const h = image.height;

    if (w > h * 1.4) return "xw";
    if (w > h) return "w";
    if (h > w * 1.4) return "xn";
    if (h > w) return "n";
    return "m";

}

export default function ImageGallery() {
    const [images, setImages] = useState([]);

    const photos = [
        "portrait4.jpg",
        "bubbles.jpg",
        "bridge.jpg",
        "cherry-tree.jpg",
        "deadlift.gif",
        "jeep.jpg",
        "wiper-motor.jpg",
        "flex-pose.jpg",
        "mist.jpg",
        "ocean.jpg",
        "ohio-flower.jpg",
        "portrait3.jpg",
        "rowena.jpg",
        "pittock-pose.jpg",
        "tree-painting.jpg",
        "mug.jpg",
        "portrait2.jpg",
    ];

    function loadSize(src) {
        return new Promise((resolve, reject) => {
            const image = new Image();

            image.onload = () => {
                resolve({
                    src,
                    width: image.naturalWidth,
                    height: image.naturalHeight,
                });
            };

            image.onerror = reject;
            image.src = "gallery/" + src;
        });
    }

    useEffect(() => {

        let cancelled = false;

        function loadImages() {
            photos.forEach(async (photo) => {
                const loaded = await loadSize(photo);

                if (!cancelled) {
                    setImages(prev => {
                        // avoid duplicates if the same image loads twice
                        if (prev.some(img => img.src === loaded.src)) {
                            return prev;
                        }

                        return [...prev, loaded];
                    });
                }
            });
        }

        loadImages();

        return () => {
            cancelled = true;
        };
    }, [photos]);

    // useEffect(() => {
    //     async function loadImages() {
    //         const loaded = await Promise.all(photos.map(loadSize));
    //         setImages(loaded);
    //     }
    //
    //     loadImages();
    // }, []);

    return (

        <div className={"gallery"}>
            <img className={"line"} src={"gallery/line.svg"} alt={"Line"} />
            {images.map(image => (

                <img key={image.src}
                     className={"gallery-img gallery-" + getSize(image)}
                     src={"gallery/" + image.src}
                     alt={"Gallery Image"}
                     style={{rotate: `${Math.random() * 9 - 4}deg`}}
                />
            ))}
            <img className={"line"} src={"gallery/line.svg"} alt={"Line"} />
        </div>
    )
}