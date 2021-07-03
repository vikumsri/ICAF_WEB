import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BackPanelUserList from './src/IT19167992/Component/Back-Panel-Users/back-panel-user-list';
import EditBackPanelUser from './src/IT19167992/Component/Back-Panel-Users/edit-back-panel-user';
import AddAgenda from './src/IT19167992/Component/Agenda/add-agenda';
import EditAgenda from './src/IT19167992/Component/Dashboard/edit-agenda';
import Dashboard from './src/IT19167992/Component/Dashboard/dashboard';
import AddBackPanelUser from './src/IT19167992/Component/Back-Panel-Users/add-back-panel-user'
import Agenda from './src/IT19167992/Component/Agenda/agenda';
import Login from "./src/IT19135830/Components/Login/ClientLogin/Login";
import Register from "./src/IT19136134/Components/Register/register";
import UserType from "./src/IT19136134/Components/Register/user-type";
import ResearchUplaod from "./src/IT19136134/Components/DocumentUploads/research";
import WorkShopPresentationUpload from "./src/IT19136134/Components/DocumentUploads/workshop-presentation";
import Payment from "./src/IT19136134/Components/Payment/payment";
import LandingPage from "./src/IT19136134/Components/LandingPage/landing-page";
import Homepage from "./src/IT19136134/Components/HomePage/home-page";
import ResearchReview from './src/IT19134536/reviewer/reserch-review'
import ReviewResearchPaper from './src/IT19134536/reviewer/review-research-paper'
import AddConference from './src/IT19134536/conference/add-conference'
import AddKeySpeaker from './src/IT19134536/conference/key-speakers'
import WorkShopReviewList from './src/IT19134536/reviewer/work-shop-review-list'
import ReviewWorkShopPresenter from './src/IT19134536/reviewer/review-workshop'
import EditConference from './src/IT19134536/conference/edit-conferencee'
import ReviwerDashBoard from './src/IT19134536/reviewer/reviwer-dashboard'
import EditorDashBoard from './src/IT19134536/Editor-Dashboard/editor-dashboard'
import ApproveConference from './src/IT19167992/Component/Approve-conference/approve-conferencee'
import Login from './src/IT19135830/Components/Login/ClientLogin/Login'
import AdminLogin from './src/IT19135830/Components/Login/AdminLogin/adminLogin'
import Profile from './src/IT19135830/Components/profile/profile'
import ViewAttendee from './src/IT19135830/Components/ViewUsers/AdminSide/viewAttendees'
import ViewResearcher from './src/IT19135830/Components/ViewUsers/AdminSide/viewResearchers'
import ViewWorkShopPresenter from './src/IT19135830/Components/ViewUsers/AdminSide/viewWorkshopPresenter'
import ClienKeySpeakers from './src/IT19135830/Components/ViewUsers/ClientSide/keySpeakers'
import ClientViewResearcher from './src/IT19135830/Components/ViewUsers/ClientSide/viewResearchers'
import ClientViewWorkShopPresenter from './src/IT19135830/Components/ViewUsers/ClientSide/viewWorkshopPresenters'


function App() {
  return (
    <div>
      <Router>
        {/* <Login /> */}
        <Switch>




          {/* IT19134536 */}
          <Route path="/editor-dashboard" component={EditorDashBoard}></Route>
          <Route path="/reviwer-dashboard" component={ReviwerDashBoard}></Route>
          <Route path="/edit-conference" component={EditConference}></Route>
          <Route path="/add-key-speakers" component={AddKeySpeaker}></Route>
          <Route path="/add-conference" component={AddConference}></Route>
          <Route path="/work-shop-single-view" component={ReviewWorkShopPresenter}></Route>
          <Route path="/work-shop-list" component={WorkShopReviewList}></Route>
          <Route path="/research-paper-single-view" component={ReviewResearchPaper}></Route>
          <Route path="/research-reviwe" component={ResearchReview}></Route>

          {/* IT19167992 */}
          <Route path="/manage-conference" component={ApproveConference} />
          <Route path="/add-back-panel-user" component={AddBackPanelUser} />
          <Route path="/back-panel-user-list" component={BackPanelUserList} />
          <Route path="/edit-back-panel-user/:id" component={EditBackPanelUser} />
          <Route path="/add-agenda" component={AddAgenda} />
          <Route path="/edit-agenda" component={EditAgenda} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/agenda" component={Agenda} />


          {/* IT19136134 */}
          <Route path="/registration" component={Register}></Route>
          <Route path="/payment-gateway" component={Payment}></Route>
          <Route
            path="/workshop-presentation/:id"
            component={WorkShopPresentationUpload}
          ></Route>
          <Route path="/research-upload/:id" component={ResearchUplaod}></Route>
          <Route path="/user-type/:id" component={UserType}></Route>
          <Route path="/home-page" component={Homepage}></Route>



          {/* IT19135830 */}

          <Route path="/user-login" component={Login}></Route>
          <Route path="/admin-login" component={AdminLogin}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/view-attendees" component={ViewAttendee}></Route>
          <Route path="/view-researchers" component={ViewResearcher}></Route>
          <Route path="/view-presenters" component={ViewWorkShopPresenter}></Route>
          <Route path="/keyspeakers" component={ClienKeySpeakers}></Route>
          <Route path="/researchers" component={ClientViewResearcher}></Route>
          <Route path="/presenters" component={ClientViewWorkShopPresenter}></Route>

          <Route path="/" component={LandingPage}></Route>



        </Switch>
      </Router>
    </div>
  );
}

export default App;
