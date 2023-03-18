import React, { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import ListingItem from "../components/ListingItem";

function Offers() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastFetchedListing, setLastFetchedListing] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // get a ref
        const listingsRef = collection(db, "listings");
        // Make a query
        const q = query(
          listingsRef,
          where("offer", "==", true),
          orderBy("timestamp", "desc"),
          limit(10)
        );

        // Execute the query
        const querySnap = await getDocs(q);

        // get last fetched lisitng
        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchedListing(lastVisible);

        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListings(listings);
        setLoading(false);
      } catch (error) {
        toast.error("Fetching list failed");
      }
    };
    fetchListings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pagination for load more
  const onFetchMoreListings = async () => {
    try {
      // get a ref
      const listingsRef = collection(db, "listings");
      // Make a query
      const q = query(
        listingsRef,
        where("offer", "==", true),
        orderBy("timestamp", "desc"),
        startAfter(lastFetchedListing),
        limit(10)
      );

      // Execute the query
      const querySnap = await getDocs(q);

      // get last fetched lisitng
      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchedListing(lastVisible);

      const listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id, // Hidden object as id
          data: doc.data(), // A method in Firebase
        });
      });

      setListings((prevState) => [...prevState, ...listings]);
      setLoading(false);
    } catch (error) {
      toast.error("Fetching list failed");
    }
  };

  return (
    <div className="category">
      <header>
        <p className="pageHeader">Offers</p>
      </header>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul className="categoryListings">
              {listings.map((listing) => (
                <ListingItem
                  listing={listing.data}
                  id={listing.id}
                  key={listing.id}
                />
              ))}
            </ul>
          </main>
          {lastFetchedListing && (
            <p className="loadMore" onClick={onFetchMoreListings}>
              Load More...
            </p>
          )}
        </>
      ) : (
        <p>No listing found for {document.categoryname}</p>
      )}
    </div>
  );
}

export default Offers;
