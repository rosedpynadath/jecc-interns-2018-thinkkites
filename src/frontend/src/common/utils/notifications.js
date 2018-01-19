import React from 'react';
import ReactDOMServer from 'react-dom/server';

export const notifications = {};

notifications.notify = (type, message) => {
    let options = {
        type: type,
        timer: 4000,
        placement: {
            from: 'top',
            align: 'right'
        }
    }
    let notification = {
        icon: "notifications",
        message: message
    }
    $.notify(notification, options);
}

notifications.info = (message) => {
    return notifications.notify('info', message);
}

notifications.success = (message) => {
    return notifications.notify('success', message);
}

notifications.warning = (message) => {
    return notifications.notify('warning', message);
}

notifications.danger = (message) => {
    return notifications.notify('danger', message);
}
