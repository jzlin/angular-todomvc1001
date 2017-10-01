import { Injectable } from '@angular/core';

@Injectable()
export class NotifyService {

  private notification: Notification;

  constructor() { }

  notify(message: string) {
    if (!('Notification' in window)) {
      alert('Thie browser does not support desktop notification');
    }
    else if (Notification.prototype.permission === 'granted') {
      this.close();
      this.notification = new Notification(message);
    }
    else if (Notification.prototype.permission !== 'denied') {
      Notification.requestPermission(permission => {
        if (permission === 'granted') {
          this.close();
          this.notification  = new Notification(message);
        }
      })
    }
  }

  private close() {
    if (this.notification) {
      this.notification.close();
    }
  }

}
