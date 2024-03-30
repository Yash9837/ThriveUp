import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SelectInterestsPage from "./pages/SelectInterestsPage";
import EventPage from "./pages/EventPage";
import ChatWebAppUIKit from "./pages/ChatWebAppUIKit";
import CreateEventPageEdit from "./pages/CreateEventPageEdit";
import TicketBookingAttendeeDetail from "./pages/TicketBookingAttendeeDetai";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in-page":
        title = "";
        metaDescription = "";
        break;
      case "/select-interests-page":
        title = "";
        metaDescription = "";
        break;
      case "/event-page":
        title = "";
        metaDescription = "";
        break;
      case "/chat-web-app-ui-kit":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in-page" element={<SignInPage />} />
      <Route path="/select-interests-page" element={<SelectInterestsPage />} />
      <Route path="/event-page" element={<EventPage />} />
      <Route path="/chat-web" element={<ChatWebAppUIKit />} />
      <Route path="/create-event-page-edit" element={<CreateEventPageEdit />} />
      <Route
        path="/ticket-booking-attendee-details"
        element={<TicketBookingAttendeeDetail />}
      />
    </Routes>
  );
}
export default App;
