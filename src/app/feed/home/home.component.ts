import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// import { AngularFire } from '@angular/fire';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public perPage = 2;
  private memesCollection: AngularFirestoreCollection<any>;
  public memes = [];
  private lastVisible = null;
  public cantLoadMore = false;

  public usersIds = [];
  public users = {};

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.afs.collection('memes')
      .ref
      .orderBy('created_at', 'desc')
      .limit(this.perPage)
      .get()
      .then(querySnapshot => {
        console.log('Res', querySnapshot.docs);
        this.lastVisible =  querySnapshot.docs[querySnapshot.docs.length - 1];
        querySnapshot.forEach(snap => {
          console.log('Snap', snap.data());
          const userId = snap.data().user_id;
          console.log('Pushing meme');

          this.afs.doc('users/' + userId ).ref.get().then(res => {
            let meme = snap.data();
            meme.user = res.data();
            this.memes.push(meme);
          });
          // if (this.usersIds.indexOf(userId) < 0) {
          //   console.log('Pegando user');
          //   this.usersIds.push(userId);
          //   this.afs.doc('users/' + userId ).ref.get().then(res => {
          //     // console.log('USER', res.id);
          //     this.users[res.id] = res.data();
          //   });
          // }
        });
    });
  }

  loadMore() {
    this.afs.collection('memes')
      .ref
      .orderBy('created_at', 'desc')
      .limit(this.perPage)
      .startAfter(this.lastVisible)
      .get()
      .then(querySnapshot => {
        console.log('Res', querySnapshot.docs);
        this.lastVisible =  querySnapshot.docs[querySnapshot.docs.length - 1];
        querySnapshot.forEach(snap => {
          console.log('Snap', snap.data());
          const userId = snap.data().user_id;
          console.log('Pushing meme');

          this.afs.doc('users/' + userId ).ref.get().then(res => {
            let meme = snap.data();
            meme.user = res.data();
            this.memes.push(meme);
          });
          // if (this.usersIds.indexOf(userId) < 0) {
          //   console.log('Pegando user');
          //   this.usersIds.push(userId);
          //   this.afs.doc('users/' + userId ).ref.get().then(res => {
          //     // console.log('USER', res.id);
          //     this.users[res.id] = res.data();
          //   });
          // }
        });
    });
  }


}
