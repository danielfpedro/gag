import { Component, OnInit } from '@angular/core';

import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable, Subject, EMPTY, throwError } from "rxjs";
import { catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-memes-add',
  templateUrl: './memes-add.component.html',
  styleUrls: ['./memes-add.component.scss']
})
export class MemesAddComponent implements OnInit {

  public currentFile = null;
  public userId = 'f6KwmWq41IdL9gk7KGKz5QYAzS63';

  constructor(public afStorage: AngularFireStorage, public afs: AngularFirestore) {

  }

  ngOnInit() {
  }

  uploadImage(event) {
    // let file = event.target.files.item(0);
    // console.log('File', this.currentFile.target.files[0]);
    const filename = Math.random() + '.jpg';
    const ref = this.afStorage.ref('memes').child(this.userId).child(filename);
    const task = ref.put(this.currentFile.target.files[0]);

    task.snapshotChanges().pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe(res => {
            this.afs.collection('memes')
              .add({
                user_id: this.userId,
                image_url: res,
                created_at: new Date()
              })
              .then(() => {
                console.log('done');
              });
          })
        })
     )
    .subscribe(() => {
      console.log('Cachorro?');
    });
  }

}
