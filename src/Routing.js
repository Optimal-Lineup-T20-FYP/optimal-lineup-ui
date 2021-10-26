import React from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Home from "./views/Homepage";
import PlayerStats from "./views/PlayerStats";
// import Abstract from "./views/Abstract";
// import HowToDonate from "./views/HowToDonate";
// import Dashboard from "./views/Dashboard";
// import Donate from "./views/Donate";
// import Jobs from "./views/Jobs";
// import Location from "./views/Location";
// import Employee from "./views/Employee";
// import WaterSources from "./views/WaterSources";
// import ApproveWaterSources from "./views/ApproveWaterSources";
// import ManageWaterSources from "./views/ManageWaterSources";
// import WaterUsage from "./views/WaterUsage";
// import SanitationSystems from "./views/SanitationSystems";
// import ApproveSanitationSystems from "./views/ApproveSanitationSystems";
// import ManageSanitationSystems from "./views/ManageSanitationSystems";
// import Families from "./views/Families";
// import Emergency from "./views/Emergency";
// import Expenditure from "./views/Expenditure";
// import Analytics from "./views/Analytics";
// import Login from "./views/Login";

export const HomeRoute = "/";
export const PlayerStatsRoute = "/playerstats";
// export const AbstractRoute = "/abstract/";
// export const HowToDonateRoute = "/howtodonate/";
// export const DashboardRoute = "/dashboard/";
// export const DonateRoute = "/donate/";
// export const JobsRoute = "/jobs/";
// export const LocationRoute = "/location/";
// export const EmployeeRoute = "/employee/";
// export const WaterSourcesRoute = "/watersources/";
// export const ApproveWaterSourcesRoute = "/approvewatersources/";
// export const ManageWaterSourcesRoute = "/managewatersources/";
// export const WaterUsageRoute = "/waterusage/";
// export const SanitationSystemsRoute = "/sanitationsystems/";
// export const ApproveSanitationSystemsRoute = "/approvesanitationsystems/";
// export const ManageSanitationSystemsRoute = "/managesanitationsystems/";
// export const FamiliesRoute = "/families/";
// export const EmergencyRoute = "/emergency/";
// export const ExpenditureRoute = "/expenditure/";
// export const AnalyticsRoute = "/analytics/";
// export const LoginRoute = "/login";

function Routing() {
  return (
    <React.Fragment>
      <Route path={HomeRoute} exact component={Home} />
      <Route path={PlayerStatsRoute} exact component={PlayerStats} />
      {/* <Route path={AbstractRoute} component={Abstract} />
      <Route path={HowToDonateRoute} component={HowToDonate} />
      <Route path={DashboardRoute} component={Dashboard} />
      <Route path={DonateRoute} component={Donate} />
      <Route path={JobsRoute} component={Jobs} />
      <Route path={LocationRoute} component={Location} />
      <Route path={EmployeeRoute} component={Employee} />
      <Route path={WaterSourcesRoute} component={WaterSources} />
      <Route path={ApproveWaterSourcesRoute} component={ApproveWaterSources} />
      <Route path={ManageWaterSourcesRoute} component={ManageWaterSources} />
      <Route path={WaterUsageRoute} component={WaterUsage} />
      <Route path={SanitationSystemsRoute} component={SanitationSystems} />
      <Route
        path={ApproveSanitationSystemsRoute}
        component={ApproveSanitationSystems}
      />
      <Route
        path={ManageSanitationSystemsRoute}
        component={ManageSanitationSystems}
      />
      <Route path={FamiliesRoute} component={Families} />
      <Route path={ExpenditureRoute} component={Expenditure} />
      <Route path={EmergencyRoute} component={Emergency} />
      <Route path={AnalyticsRoute} component={Analytics} />
      <Route path={LoginRoute} component={Login} /> */}
    </React.Fragment>
  );
}

export default withRouter(Routing);
