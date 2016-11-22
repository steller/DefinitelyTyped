// Type definitions for React Notification System Redux v1.0.10
// Project: https://www.npmjs.com/package/react-notification-system-redux
// Definitions by: Vincent Rouffiat <https://github.com/steller>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="react" />
/// <reference types="redux" />
/// <reference types="react-notification-system" />

import * as React from "react";
import { Reducer } from "redux";
import { Notification } from "react-notification-system";

export interface NotificationsProps {
  notifications: Notification[];
}

interface ShowAction extends Notification {
  type: string;
}

interface HideAction {
  type: string;
  uid: number | string;
}

export function show(opts?: Notification, level?: "error" | "warning" | "info" | "success"): ShowAction;
export function success(opts?: Notification): ShowAction;
export function error(opts?: Notification): ShowAction;
export function warning(opts?: Notification): ShowAction;
export function info(opts?: Notification): ShowAction;
export function hide(uid: number | string): HideAction;

export function reducer(state?: any, action?: any): Reducer<NotificationsProps>;

declare type Notifications = React.ClassicComponentClass<NotificationsProps>;
declare const Notifications: React.ClassicComponentClass<NotificationsProps>;

export default Notifications;
