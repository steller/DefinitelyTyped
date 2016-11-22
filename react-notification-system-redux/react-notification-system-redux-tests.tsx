import * as React from "react";
import { Notification } from "react-notification-system";
import Notifications, * as NotificationSystemRedux from "react-notification-system-redux";

const options: Notification = {
  title: "Hey, it's good to see you!",
  message: "Now you can see how easy it is to use notifications in React!",
  autoDismiss: 0,
  action: {
    label: "Awesome!",
    callback: function() {
      console.log("Clicked");
    }
  }
};

const optionsUid = Object.assign({ uid: "test foo" }, options);

class NotificationSystemReduxTests_Notifications_emptyList extends React.Component<any, any>{
  render() {
    return (
      <Notifications notifications={[]} />
    )
  }
}

class NotificationSystemReduxTests_Notifications_withListOptions extends React.Component<any, any>{
  render() {
    return (
      <Notifications notifications={[options, optionsUid, {
        title: "Hey, it's good to see you!",
        message: "Now you can see how easy it is to use notifications in React!"
      }]} />
    )
  }
}

NotificationSystemRedux.show();
NotificationSystemRedux.show(options);
NotificationSystemRedux.show(optionsUid, "error");

NotificationSystemRedux.success();
NotificationSystemRedux.success(optionsUid);

NotificationSystemRedux.error();
NotificationSystemRedux.error(optionsUid);

NotificationSystemRedux.warning();
NotificationSystemRedux.warning(optionsUid);

NotificationSystemRedux.info();
NotificationSystemRedux.info(optionsUid)

NotificationSystemRedux.hide(135);
NotificationSystemRedux.hide("hsfjb");

NotificationSystemRedux.reducer();
NotificationSystemRedux.reducer(options);
NotificationSystemRedux.reducer(options, Object.assign({ type: "RNS_SHOW_NOTIFICATION" }, options));
