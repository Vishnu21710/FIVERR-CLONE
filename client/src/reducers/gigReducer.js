const currentUser = JSON.parse(localStorage.getItem('currentUser'))
export const INITIAL_STATE = {
      userId: currentUser._id,
      gig_title: "",
      gig_description: "",
      gig_category: "",
      gig_price: "",
      gig_cover_image: "",
      gig_images: [],
      gig_short_title: "",
      gig_short_description: "",
      gig_delivery_time: "",
      gig_revisions: "",
      gig_features: []
}

export const gigReducer = (state, action)=>{
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                [action.payload.name] : action.payload.value
            }
        case "ADD_IMAGES":
                return {
                    ...state,
                    gig_cover_image: action.payload.gig_cover_image,
                    gig_images: action.payload.gig_images 
                }

        case "ADD_FEATURES":
                return {
                    ...state,
                    gig_features : [...state.gig_features, action.payload]
                    }
        case "REMOVE":
            return{
                ...state,
                gig_features: state.gig_features.filter((f)=> f !== action.payload)
            }
    
        default:
            return state
    }
}