/**
 * Recipe Reducer
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

// Set initial state
export const initialState = {
  meeting: [
    {
    id:1,
    time:'30 June 2017',
    target:'Set 1'
  },
  {
  id:2,
  time:'1 July 2017',
  target:'Set 2'
},
{
id:3,
time:'2 July 2017',
target:'Set 1'
},
{
id:4,
time:'3 July 2017',
target:'Set 2'
},
{
id:4,
time:'4 July 2017',
target:'Holiday'
},
{
id:5,
time:'5 July 2017',
target:'Meeting'
},
]
}

export default function MeetingReducer(state = initialState, action) {
  switch (action.type) {
    case 'MEETINGS_REPLACE': {
      return {
        ...state,
      };
    }
    case 'RECIPES_REPLACE': {
      let recipes = [];

      // Pick out the props I need
      if (action.data && typeof action.data === 'object') {
        recipes = action.data.map(item => ({
          id: item.id,
          title: item.title,
          body: item.body,
          category: item.category,
          image: item.image,
          author: item.author,
          ingredients: item.ingredients,
          method: item.method,
        }));
      }

      return {
        ...state,
        recipes,
      };
    }
    default:
      return state;
  }
}
