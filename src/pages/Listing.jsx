import React, { useEffect, useState } from "react";
import {
  doc,
  getDocs,
  collection,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase.config";
import { useParams, useNavigate, Link, useFetcher } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Spinner from "../components/Spinner";
import shareIcon from "../assets/svg/shareIcon.svg";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Listing() {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);

  const navigate = useNavigate();
  let params = useParams();

  const auth = getAuth();

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, "listings", params.listingId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setListing(docSnap.data());
        setLoading(false);
      }
    };
    fetchListing();
  }, [navigate, params.listingId]);

  //   useEffect(() => {
  //     const getListingById = async () => {
  //       try {
  //         const docRef = doc(db, "listings", "0nlYrBJqu8zMoviTQtVH");
  //         const docSnap = await getDoc(docRef);
  //         console.log(docSnap.data());

  //         // const listingsRef = collection(db, "listings");
  //         // const listingRefSnap = await getDocs(listingsRef);

  //         // listingRefSnap.forEach((doc) => {
  //         //   console.log(doc.data());
  //         // });
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     getListingById();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <main>
      {/* Image Slider */}

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        style={{ height: "300px" }}
      >
        {listing.imgUrls.map((url, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="swiperSlideDiv"
                style={{
                  background: `url(${listing.imgUrls[index]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
              ></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        className="shareIconDiv"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          setShareLinkCopied(true);
          setTimeout(() => {
            setShareLinkCopied(false);
          }, 2000);
        }}
      >
        <img src={shareIcon} alt="" />
      </div>

      {shareLinkCopied && <p className="linkCopied">Link Copied!</p>}

      <div className="listingDetails">
        <p className="listingName">
          {listing.name} - $
          {listing.offer ? listing.discountedPrice : listing.regularPrice}
        </p>
        <p className="listingLocation">{listing.location}</p>
        <p className="listingType">
          For {listing.type === "rent" ? "Rent" : "Sale"}
        </p>
        {listing.offer && (
          <p className="discountPrice">
            ${listing.regularPrice - listing.discountedPrice} Discount
          </p>
        )}
        <ul className="listingDetialsList">
          <li>
            {listing.bedrooms > 1
              ? `${listing.bedrooms} Bedrooms`
              : "1 Bedroom"}
          </li>
          <li>
            {listing.bathrooms > 1
              ? `${listing.bathrooms} Bathrooms`
              : "1 Bathroom"}
          </li>
          <li>{listing.parking && "Parking Spot"}</li>
          {listing.furnished && <li>Furnished</li>}
        </ul>

        <p className="listingLocationTitle">Location</p>
        {/* Maps of location */}
        <div className="leafletContainer">
          <MapContainer
            style={{ height: "100%", width: "100%" }}
            center={[listing.latitude, listing.longitude]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
            />
            <Marker position={[listing.latitude, listing.longitude]}>
              <Popup>{listing.location}</Popup>
            </Marker>
          </MapContainer>
        </div>

        {auth.currentUser?.uid !== listing.userRef && (
          <Link
            to={`/contact/${listing.userRef}?listingName=${listing.name}`}
            className="primaryButton"
          >
            Contact Owner
          </Link>
        )}
      </div>
    </main>
  );
}

export default Listing;
