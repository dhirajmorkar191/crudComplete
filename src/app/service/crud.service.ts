import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
              public fireservices:AngularFirestore,
              private auth: AngularFireAuth,
              private router: Router) { }

  create_Newemployee(Record:any)
  {
    return this.fireservices.collection('Employee').add(Record);
  }

  get_Allemployee()
  {
    return this.fireservices.collection('Employee').snapshotChanges();
  }

  update_employee(recordid:any, record:any)
  {
    this.fireservices.doc('Employee/' + recordid).update(record);
  }

  delete_employee(record_id:any)
  {
    this.fireservices.doc('Employee/' + record_id).delete();
  }

  login(email: string, password: string) {
    this.auth.signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Nice, it worked!',value);
      this.router.navigateByUrl('/Login');
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
    });
  }

  

  emailSignup(email: string, password: string) {
    this.auth.createUserWithEmailAndPassword(email, password)
    .then(value => {
     console.log('Sucess', value);
     this.router.navigateByUrl('/Login');
    })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider)
      .then(value => {
    console.log('Sucess', value),
     this.router.navigateByUrl('/Login');
   })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });
  }
  
  logout() {
    this.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  private oAuthLogin(provider:any) {
    return this.auth.signInWithPopup(provider);
  }

}