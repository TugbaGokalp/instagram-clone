import Home from "./Home";
import Notifications from "./Notifications";
import ProfileLink from "./ProfileLink";

const SidebarItems = () => {
  return (
    <>
      <Home />
      {/* Search */}
      <Notifications />
      <ProfileLink />
    </>
  );
};

export default SidebarItems;
