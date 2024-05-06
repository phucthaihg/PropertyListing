import { Provider } from "react-redux";
import { store } from "./store/store";
import ScrollToTop from "@/components/common/ScrollTop";
import "../public/assets/scss/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";
import NotFoundPage from "./pages/not-found";

import HomePage from "../mysrc/pages/HomePage";
import ListingDetailPage from "../mysrc/pages/ListingDetailPage";


if (typeof window !== "undefined") {
  import("bootstrap");
}


function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="/listing/:listingId" element={<ListingDetailPage />} />


              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Provider>

        <ScrollToTop />
        <ScrollTopBehaviour />
      </BrowserRouter>
    </>
  );
}

/*
function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="home-2" element={<HomePage2 />} />
              <Route path="home-3" element={<HomePage3 />} />
              <Route path="home-4" element={<HomePage4 />} />
              <Route path="home-5" element={<HomePage5 />} />
              <Route path="home-6" element={<HomePage6 />} />
              <Route path="home-7" element={<HomePage7 />} />
              <Route path="home-8" element={<HomePage8 />} />
              <Route path="home-9" element={<HomePage9 />} />
              <Route path="home-10" element={<HomePage10 />} />

              <Route path="listing-grid-v1" element={<ListingGridPage1 />} />
              <Route path="listing-grid-v2" element={<ListingGridPage2 />} />
              <Route path="listing-grid-v3" element={<ListingGridPage3 />} />
              <Route path="listing-grid-v4" element={<ListingGridPage4 />} />
              <Route path="listing-grid-v5" element={<ListingGridPage5 />} />
              <Route path="listing-grid-v6" element={<ListingGridPage6 />} />

              <Route path="listing-list-v1" element={<ListingPage1 />} />

              <Route path="listing-map-v1" element={<ListingMapPage1 />} />
              <Route path="listing-map-v2" element={<ListingMapPage2 />} />
              <Route path="listing-map-v3" element={<ListingMapPage3 />} />
              <Route path="listing-map-v4" element={<ListingMapPage4 />} />

              <Route
                path="listing-details-v1/:id"
                element={<ListingDynamicDetailsV1 />}
              />
              <Route
                path="listing-details-v2/:id"
                element={<ListingDynamicDetailsV2 />}
              />
              <Route
                path="listing-details-v3"
                element={<ListingDetailsPage3 />}
              />
              <Route
                path="listing-details-v4"
                element={<ListingDetailsPage4 />}
              />

              <Route path="map-header" element={<MapHeaderPage />} />
              <Route path="parallax-style" element={<ParallaxStylePage />} />
              <Route path="slider-style" element={<SliderStylePage />} />

              <Route path="create-listing" element={<CreateListingPage />} />
              <Route path="my-dashboard" element={<MyDashboardPage />} />
              <Route path="my-favourites" element={<MyFavouritePage />} />
              <Route path="my-message" element={<MyMessagePage />} />
              <Route path="my-package" element={<MyPackagepage />} />
              <Route path="my-profile" element={<MyPropertiesPage />} />
              <Route path="my-properties" element={<MyPropertiesPage />} />
              <Route path="my-review" element={<MyReviewPage />} />
              <Route path="my-saved-search" element={<MySavedSearchPage />} />

              <Route path="blog-list-1" element={<Blog1Page />} />
              <Route path="blog-list-2" element={<Blog2Page />} />
              <Route path="blog-list-3" element={<Blog3Page />} />
              <Route path="blog-details/:id" element={<BlogDetails />} />

              <Route path="404" element={<NotFoundPage />} />
              <Route path="about-us" element={<AboutUsPage />} />
              <Route path="compare" element={<ComparePage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="faq" element={<FaqPage />} />
              <Route path="gallery" element={<PageGallery />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="membership" element={<MembershipPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="service" element={<ServicePage />} />
              <Route path="terms" element={<TermsPage />} />

              <Route path="agency-v1" element={<AgencyV1Page />} />
              <Route path="agency-v2" element={<AgencyV2Page />} />
              <Route
                path="agency-details/:id"
                element={<AgencyDetailsDynamic />}
              />

              <Route path="agent-v1" element={<AgentV1Page />} />
              <Route path="agent-v2" element={<Agentv2Page />} />
              <Route
                path="agent-details/:id"
                element={<AgentDetailsDynamic />}
              />

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Provider>

        <ScrollToTop />
        <ScrollTopBehaviour />
      </BrowserRouter>
    </>
  );
}
*/

export default App;
