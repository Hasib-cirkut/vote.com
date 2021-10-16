### Bug Tracking
1. Deny Button Doesn't work. (``src/pages/Dashboard/Components/RequestCard.jsx``) [solved]
2. **Reproduce**: Goto a thread. Click add option on the top right. The bottom Navigation won't change to request.

    **Probable Reason**: BottomNav is not re-rendering. 

### TODO
- #### Frontend:
  1. Show votePost Requests in Dashboard

- #### Backend:
  1. Add VotePosts to Database, and create api to get them from frontend

### Features to add

1. Search threads.
2. Users can vote posts.
3. Upon successful request of threads or votes, users will receive a notification