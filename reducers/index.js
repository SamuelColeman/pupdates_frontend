import { combineReducers } from 'redux'
import { user } from './user'
import { pack } from './pack'
import { packPhotos } from './packPhotos'
import { otherUsers } from './otherUsers'
import { swipeUser } from './swipeUser'
import { swipePack } from './swipePack'
import { swipePackPhotos } from './swipePackPhotos'
import { tempUserImage } from './tempUserImage'
import { imageUpload } from './imageUpload'
import { modalState } from './modalState'
import { newDogImages } from './newDogImages'
import { matches } from './matches'
import { matchesPack } from './matchesPack'
import { matchesPackImages } from './matchesPackImages'

export const rootReducer = combineReducers({
  user,
  pack,
  packPhotos,
  otherUsers,
  swipeUser,
  swipePack,
  swipePackPhotos,
  tempUserImage,
  imageUpload,
  modalState,
  newDogImages,
  matches,
  matchesPack,
  matchesPackImages
})