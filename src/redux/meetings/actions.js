/**
 * Meeting Actions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { Firebase, FirebaseRef } from '@constants/';


/**
  * Get Meals
  */
export function getMeetings() {
  // return (dispatch) => {
  //   return new Firebase.Promise((resolve) => {
  //     const ref = FirebaseRef.child('events');
  //
  //     return ref.once('value').then((snapshot) => {
  //       const meetings = snapshot.val() || {};

        return {
          type: 'MEETINGS_REPLACE',
        }
  //       }));
  //     });
  //   });
  // };
}

/**
  * Get Recipes
  */
export function reschedule() {
  return (dispatch) => {
    return new Firebase.Promise((resolve) => {
      const ref = FirebaseRef.child('recipes');

      return ref.on('value', (snapshot) => {
        const recipes = snapshot.val() || {};

        return resolve(dispatch({
          type: 'RESHEDULE',
          data: recipes,
        }));
      });
    });
  };
}

export function checkIn() {
  return (dispatch) => {
    return new Firebase.Promise((resolve) => {
      const ref = FirebaseRef.child('recipes');

      return ref.on('value', (snapshot) => {
        const recipes = snapshot.val() || {};

        return resolve(dispatch({
          type: 'CHECK_IN',
          data: recipes,
        }));
      });
    });
  };
}
