import { Component, OnInit } from '@angular/core';
import {
  RouteConfigLoadStart,
  RouteConfigLoadEnd,
  Router,
  RouterLink,
} from '@angular/router';
import { Observable, timer } from 'rxjs';
import { take, map, finalize } from 'rxjs/operators';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AsyncPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'som-sign-in',
  templateUrl: './sign-in.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatButtonModule,
    MatBottomSheetModule,
    RouterLink,
    AsyncPipe,
  ],
})
export class SignInComponent implements OnInit {
  message: Error[];

  loading = false;
  lockedOutTimer: Observable<number>;
  lockedOutTimerCounter: number;

  constructor(
    private _router: Router,
    private modalService: MatDialog,
    private bottomSheetService: MatBottomSheet,
  ) {}

  /**
   * this is used to set our message incase there's one to our user before clearing our
   * local storage using our auth service
   */
  ngOnInit() {
    this.modalService.closeAll();
    this.bottomSheetService.dismiss();
    this._router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.loading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.loading = false;
      }
    });
  }

  /**
   * this is called when the user click on the submit button
   * and it also checks for the validity of the form , if invalid return don't do anything
   * and after authentication is successful we move to the redirectUrl if it was existing else
   * to dashboard
   */
}
