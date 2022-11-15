import React, { useState, useCallback } from "react";
import Gallery from 'react-photo-gallery-react17'; 
import Carousel, { Modal, ModalGateway } from 'react-images';
import { merchPhotos } from './MerchPhotos';

export default function Merch() {
    // Photo Gallery functionality 
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };


    return(
        <div className='longSection pageContainer redBackground' style={{
            textAlign: 'center'
        }}>
            <h1 className='sectionHeader'>Merch</h1>
            <p className='sectionCaption'>Represent GSP.</p>
            
            <Gallery photos={merchPhotos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                    currentIndex={currentImage}
                    views={merchPhotos.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                    }))}
                    />
                </Modal>
                ) : null}
            </ModalGateway>

            <h2>Member Pricing</h2>
            <ul className='infoList'>
                <li className='infoListItem'>Cotton T Shirt - 1 for $25, 2 for $40</li>
                <li className='infoListItem'>Tank Top - 1 for $25, 2 for $40</li>
                <li className='infoListItem'>Dri-Fit - 1 for $40, 2 for $60</li>
            </ul>

            <p>Member only offer - Dri-Fit + a T-Shirt/Tank Top for $50</p>
            
            <h2>Non Member Pricing</h2>
            <ul className='infoList'>
                <li className='infoListItem'>Cotton T Shirt - 1 for $30, 2 for $50</li>
                <li className='infoListItem'>Tank Top - 1 for $30, 2 for $50</li>
                <li className='infoListItem'>Dri-Fit - 1 for $45, 2 for $70</li>
            </ul>

            <p>Cash, check, Venmo, CashApp, Zelle accepted by shirts. Shirts sold as long as they are in stock. Stop in or reach out to buy.</p>
            
        </div>

    )

}