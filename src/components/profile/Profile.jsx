import { NavLink } from "react-router-dom";
import Style from "../dashboard/dashboardLayout/dashboardLayout.module.css";
import { CgProfile } from "react-icons/cg";
import { FaWallet } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getWalletData } from "../redux/thunk/moneyThunk";
import { useEffect } from "react";

const Profile = () => {
  let dispatch = useDispatch();
  const wallet = useSelector((state) => state.wallet.wallet.wallet?.balance);
  useEffect(() => {
    dispatch(getWalletData());
  }, [dispatch]);
  return (
    <div className={Style.profile_route_container}>
      <NavLink to="/app/dashboardLayout/myWallet">
        <FaWallet /> : <small>₹ {wallet}</small>
      </NavLink>
      <NavLink to="/app/dashboardLayout/profile">
        <CgProfile />
      </NavLink>
    </div>
  );
};

export default Profile;
