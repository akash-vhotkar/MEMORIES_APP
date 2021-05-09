const postreducer = (posts =[], action)=>{
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return action.payload
        case "UPDATE":
                return action.payload;
        case "CREATE":
                return action.payload;
        case "LIKE":
            return action.payload;

        case "DELETE":
            return action.payload;

        default:
            return posts;
    }
}
export default postreducer;