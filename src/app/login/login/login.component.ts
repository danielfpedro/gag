import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore) { }

  ngOnInit() {
  }

  doLoginWithFacebook() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(res => {
        const user = res.user;
        const userId = res.user.uid;
        this.afs.collection('users').doc(userId)
          .ref
          .get()
          .then(res => {
            console.log('User', user);
            const userToAdd = {
              name: user.displayName,
              profilePicture: user.photoURL
            };
            if (res.exists) {
              this.afs.collection('users').doc(userId).update(userToAdd)
                .then(res => {
                  console.log('Ja existia fez update');
                });
            } else {
              this.afs.collection('users').doc(userId).set(userToAdd)
                .then(res => {
                  console.log('Não existia fez set');
                });
            }
          })
      });
  }

}
