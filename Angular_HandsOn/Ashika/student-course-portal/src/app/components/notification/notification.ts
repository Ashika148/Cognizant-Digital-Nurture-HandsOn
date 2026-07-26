import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  imports: [CommonModule, FormsModule],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
  // Providing NotificationService here (rather than providedIn: 'root') creates a
  // NEW instance of the service scoped to this component and its children. Each
  // <app-notification> instance on the page gets its own isolated notification
  // list — they do NOT share state with each other or with any root-level version
  // of the service. This is useful for state that should reset per component
  // instance, like a form wizard step or, here, a self-contained notification box.
  providers: [NotificationService],
})
export class Notification {
  message = '';

  constructor(private notificationService: NotificationService) {}

  addNotification() {
    if (this.message.trim()) {
      this.notificationService.addNotification(this.message);
      this.message = '';
    }
  }

  get notifications(): string[] {
    return this.notificationService.getNotifications();
  }
}
