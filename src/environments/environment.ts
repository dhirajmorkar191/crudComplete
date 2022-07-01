// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyAj9s8u_cSiHkZbvkxm7faPBuQB1bHerq8",
    authDomain: "employeedata-a4488.firebaseapp.com",
    projectId: "employeedata-a4488",
    storageBucket: "employeedata-a4488.appspot.com",
    messagingSenderId: "945008932355",
    appId: "1:945008932355:web:a37dbad56430f923964036",
    measurementId: "G-0M8Q7LQJYL"
}
};
// {
//   this.crudservice.get_Allemployee()
//   .pipe(
//     map((e)=>{
//         e.docs.map((data:any)=>{
//           return {
//             id:data.id,
//             ...data.data()
//           }          
//         })
//     })
//   )
//   .subscribe(data => {
//     console.log(data);
    
//   })
// }
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);