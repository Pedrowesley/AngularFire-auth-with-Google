import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { User } from './user';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class AfService {
  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth,
              public afs: AngularFirestore) {
    this.user = afAuth.authState
    // .switchMap(user => {
    //   if(user) {
    //     return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
    //   } else {
    //     return Observable.of(null);
    //   }
    // })
  }
  loginWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider)
  //   .then((credential) => {
  //     this.updateUser(credential.user);
  //   })
  // }
  // updateUser(user) {
  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  //   const data: User = {
  //     uid: user.uid,
  //     email: user.email,
  //     displayName: user.displayName,
  //     photoURL: user.photoURL,
  //     roles: {
  //       subscriber: true
  //     }
  //   }
  //   return userRef.set(data, {merge: true});
   }

   loginWithFacebook(){
    const provider = new firebase.auth.FacebookAuthProvider();
    this.afAuth.auth.signInWithPopup(provider)
   }

  logout(){
    this.afAuth.auth.signOut();
  }
}
