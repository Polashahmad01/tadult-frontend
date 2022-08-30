export default function({ store, redirect, route }) {
  const action = route.query.mode;
  let query = route.fullPath;
  query = query.replace('/auth', '')
    
  if(action === 'resetPassword') {
    location.replace('/new-password' + query)
  }
}
  