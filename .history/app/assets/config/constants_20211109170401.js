import { IMAGES, SVGS } from "../img";
import { palette } from "./colors";

const coaches=[
  {
    name:'許重六',
    status:'大師',
    img:IMAGES.coach1
  },
  {
    name:'許重六',
    status:'大師',
    img:IMAGES.coach2
  },
  {
    name:'許重六',
    status:'大師',
    img:IMAGES.coach1
  },
  {
    name:'許重六',
    status:'大師',
    img:IMAGES.coach2
  },
  {
    name:'許重六',
    status:'大師',
    img:IMAGES.coach1
  },
  {
    name:'許重六',
    status:'大師',
    img:IMAGES.coach2
  },
  {
    name:'許重六',
    status:'大師',
    img:IMAGES.coach1
  },
  {
    name:'許重六',
    status:'大師',
    img:IMAGES.coach2
  },
]
const coup = [
  {
    offer:'免費VIP會員賽1場',
    date:'2021-12-27'
  },
  {
    offer:'教練課程9折優惠',
    date:'2021-12-27'
  },
  {
    offer:'教練課程9折優惠',
    date:'2021-12-27'
  },
]
const news=[
  {
    img:IMAGES.news,
    date:'2021-12-16',
    details:`A WSOP POY accolade has surprisingly evaded Hellmuth despite his WSOP success. He has finished second on the leaderboard in 2006, 2011 and 2012. The latter was essentially a lock for 'The Poker Brat,' but Greg Merson's 2012 Main Event win pipped Hellmuth to top spot.

    Hellmuth has never been shy to give his opinion, but does his barb at the WSOP scoring formula have some credence? He raises some valid points in that nobody cares about who finishes 10th and beyond, the poker community wants to know who makes a final table and who wins.
    
    However, topping a leaderboard is all about points and the best way to accumulate them is by playing as many events as possible. With much of Hellmuth's criticisms, they come from a place of emotion which is fine but when it comes to a formula needed to choose the POY, emotion needs to be taken out of the equation.
    
    Other POY contender Shaun Deeb raised a similar point when replying to Hellmuth on Twitter also.`,
    title:'標標標標標標標標標標標標標標標標標標標標'
  },{
    img:IMAGES.news,
    date:'2021-12-16',
    details:`A WSOP POY accolade has surprisingly evaded Hellmuth despite his WSOP success. He has finished second on the leaderboard in 2006, 2011 and 2012. The latter was essentially a lock for 'The Poker Brat,' but Greg Merson's 2012 Main Event win pipped Hellmuth to top spot.

    Hellmuth has never been shy to give his opinion, but does his barb at the WSOP scoring formula have some credence? He raises some valid points in that nobody cares about who finishes 10th and beyond, the poker community wants to know who makes a final table and who wins.
    
    However, topping a leaderboard is all about points and the best way to accumulate them is by playing as many events as possible. With much of Hellmuth's criticisms, they come from a place of emotion which is fine but when it comes to a formula needed to choose the POY, emotion needs to be taken out of the equation.
    
    Other POY contender Shaun Deeb raised a similar point when replying to Hellmuth on Twitter also.`,
    title:'標標標標標標標標標標標標標標標標標標標標'
  },{
    img:IMAGES.news,
    date:'2021-12-16',
    details:`A WSOP POY accolade has surprisingly evaded Hellmuth despite his WSOP success. He has finished second on the leaderboard in 2006, 2011 and 2012. The latter was essentially a lock for 'The Poker Brat,' but Greg Merson's 2012 Main Event win pipped Hellmuth to top spot.

    Hellmuth has never been shy to give his opinion, but does his barb at the WSOP scoring formula have some credence? He raises some valid points in that nobody cares about who finishes 10th and beyond, the poker community wants to know who makes a final table and who wins.
    
    However, topping a leaderboard is all about points and the best way to accumulate them is by playing as many events as possible. With much of Hellmuth's criticisms, they come from a place of emotion which is fine but when it comes to a formula needed to choose the POY, emotion needs to be taken out of the equation.
    
    Other POY contender Shaun Deeb raised a similar point when replying to Hellmuth on Twitter also.`,
    title:'標標標標標標標標標標標標標標標標標標標標'
  },{
    img:IMAGES.news,
    date:'2021-12-16',
    details:`A WSOP POY accolade has surprisingly evaded Hellmuth despite his WSOP success. He has finished second on the leaderboard in 2006, 2011 and 2012. The latter was essentially a lock for 'The Poker Brat,' but Greg Merson's 2012 Main Event win pipped Hellmuth to top spot.

    Hellmuth has never been shy to give his opinion, but does his barb at the WSOP scoring formula have some credence? He raises some valid points in that nobody cares about who finishes 10th and beyond, the poker community wants to know who makes a final table and who wins.
    
    However, topping a leaderboard is all about points and the best way to accumulate them is by playing as many events as possible. With much of Hellmuth's criticisms, they come from a place of emotion which is fine but when it comes to a formula needed to choose the POY, emotion needs to be taken out of the equation.
    
    Other POY contender Shaun Deeb raised a similar point when replying to Hellmuth on Twitter also.`,
    title:'標標標標標標標標標標標標標標標標標標標標'
  },{
    img:IMAGES.news,
    date:'2021-12-16',
    details:`A WSOP POY accolade has surprisingly evaded Hellmuth despite his WSOP success. He has finished second on the leaderboard in 2006, 2011 and 2012. The latter was essentially a lock for 'The Poker Brat,' but Greg Merson's 2012 Main Event win pipped Hellmuth to top spot.

    Hellmuth has never been shy to give his opinion, but does his barb at the WSOP scoring formula have some credence? He raises some valid points in that nobody cares about who finishes 10th and beyond, the poker community wants to know who makes a final table and who wins.
    
    However, topping a leaderboard is all about points and the best way to accumulate them is by playing as many events as possible. With much of Hellmuth's criticisms, they come from a place of emotion which is fine but when it comes to a formula needed to choose the POY, emotion needs to be taken out of the equation.
    
    Other POY contender Shaun Deeb raised a similar point when replying to Hellmuth on Twitter also.`,
    title:'標標標標標標標標標標標標標標標標標標標標'
  },{
    img:IMAGES.news,
    date:'2021-12-16',
    details:`A WSOP POY accolade has surprisingly evaded Hellmuth despite his WSOP success. He has finished second on the leaderboard in 2006, 2011 and 2012. The latter was essentially a lock for 'The Poker Brat,' but Greg Merson's 2012 Main Event win pipped Hellmuth to top spot.

    Hellmuth has never been shy to give his opinion, but does his barb at the WSOP scoring formula have some credence? He raises some valid points in that nobody cares about who finishes 10th and beyond, the poker community wants to know who makes a final table and who wins.
    
    However, topping a leaderboard is all about points and the best way to accumulate them is by playing as many events as possible. With much of Hellmuth's criticisms, they come from a place of emotion which is fine but when it comes to a formula needed to choose the POY, emotion needs to be taken out of the equation.
    
    Other POY contender Shaun Deeb raised a similar point when replying to Hellmuth on Twitter also.`,
    title:'標標標標標標標標標標標標標標標標標標標標'
  },
]
const pokerField =[
  {
    img:IMAGES.coach2,
  },
  {
    img:IMAGES.coach2,
  },
  {
    img:IMAGES.coach2,
  },
  
]
const appoint=[
  {
    title:'大師 許重六 1V1 教練課程',
    date:'2021-12-27'
  },
  {
    title:'APP講座',
    date:'2021-12-27'
  },
  {
    title:'大師 許重六 1V1 教練課程',
    date:'2021-12-27'
  },
  {
    title:'APP講座',
    date:'2021-12-27'
  },
  {
    title:'APP講座',
    date:'2021-12-27'
  },
]
const contact =[
  {
    title:'台中總部',
    svg : SVGS.loc,
    contact:'台中市南區學府路79號2樓',
    backcolor:palette.maalta
  },
  {
    title:'官網',
    svg : SVGS.world,
    contact:'pokerdomain.com.tw',
    backcolor:palette.black
  },
  {
    title:'台中總部',
    svg : SVGS.loc,
    contact:'台中市南區學府路79號2樓',
    backcolor:palette.maalta
  },
]
export const CONST ={
  appoint,
  coaches,
  coup,
  news,
  pokerField,
  contact
}