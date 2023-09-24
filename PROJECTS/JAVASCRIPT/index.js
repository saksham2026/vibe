const songlist = [
  {
    song: new Audio("/ASSETS/SONGS/Apna Bana le.mp3"),
    mood: "Travel",
    name: "Apna Bana le",
    artist: "Arjit Singh",
    link: "https://i.ytimg.com/vi/u2NAuswnTKs/mqdefault.jpg",
  },
  {
    song: new Audio("/ASSETS/SONGS/Aya na tu.mp3"),
    mood: "Travel",
    name: "Aya Na Tu",
    artist: "Arjun Kanungo",
    link: "https://c.saavncdn.com/806/Aaya-Na-Tu-Hindi-2018-20190924060933-500x500.jpg",
  },
  {
    song: new Audio("/ASSETS/SONGS/Enna Sona.mp3"),
    mood: "Travel",
    name: "Enna Sona",
    artist: "Arjit Singh",
    link: "https://downloads4djs.co.in/wp-content/uploads/2017/01/DJ-MONTZ-ENNA-SONA-MASHUP.jpg",
  },
  {
    song: new Audio("/ASSETS/SONGS/Tu Aake dekh le.mp3"),
    mood: "Travel",
    name: "Tu Aake dekh le",
    artist: "King",
    link: "https://lh5.googleusercontent.com/proxy/_9EqAmfrH5ZVxfh44npT4T0ZSc3ipJAPYzOVGsAm9cw99YFEQiiKm2Wyn8bQqihToFHxGrOhfjDcJLe1xAtPtfDb8JA=w680",
  },
  {
    song: new Audio("/ASSETS/SONGS/Tu hi yaar mera.mp3"),
    mood: "Travel",
    name: "Tu hi yaar mera",
    artist: "Arjit Singh",
    link: "https://th.bing.com/th/id/OIP._DcPeTqrxwC73umVp-G53AHaEY?pid=ImgDet&rs=1",
  },
  {
    song: new Audio("/ASSETS/SONGS/Tum Hi Ho.mp3"),
    mood: "Romance",
    name: "Tum Hi Ho",
    artist: "Arjit Singh",
    link: "https://th.bing.com/th/id/R.d09c6a97a6143fc68b75cc75e034757a?rik=K8DtWk3%2bo0OdRQ&riu=http%3a%2f%2fi1.ytimg.com%2fvi%2fWWZxDA81JFk%2fmaxresdefault.jpg&ehk=gcdBrn5NVWFhOa35yV2rTqUsoicrZYBZPz%2fRFsIKFqY%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    song: new Audio("/ASSETS/SONGS/Agar tum Saath ho.mp3"),
    mood: "Romance",
    name: "Agar tum Saath ho",
    artist: "Arjit Singh",
    link: "https://i.pinimg.com/originals/60/87/02/6087025278fe0acff8baa40485df9c18.jpg",
  },
  {
    song: new Audio("/ASSETS/SONGS/Let Me Love You.mp3"),
    mood: "Romance",
    name: "Let Me Love You",
    artist: "DJ Snake",
    link: "https://th.bing.com/th/id/OIP.JVjFohqs8en_iiSHNrBTOgHaHa?pid=ImgDet&rs=1",
  },
  {
    song: new Audio("/ASSETS/SONGS/Let Me Down Slowly.mp3"),
    mood: "Romance",
    name: "Let Me Down Slowly",
    artist: "Alec Benjamin",
    link: "https://th.bing.com/th/id/OIP.vIIM4pUda5mnnj7_CLqP7gHaHa?pid=ImgDet&rs=1",
  },
  {
    song: new Audio("/ASSETS/SONGS/Love Me Like You Do.mp3"),
    mood: "Romance",
    name: "Love Me like You do",
    artist: "Ellie Goulding",
    link: "https://maxopediaco.files.wordpress.com/2016/06/love_me_like_you_do_cover.jpg",
  },
  {
    song: new Audio("/ASSETS/SONGS/saturday-saturday.mp3"),
    mood: "Party",
    name: "Saturday Saturday",
    artist: "Baadshah",
    link: "https://th.bing.com/th/id/OIP.Q1vca2nHlV1Qczta0IT28QHaHa?pid=ImgDet&rs=1",
  },
  {
    song: new Audio("/ASSETS/SONGS/paagal.mp3"),
    mood: "Party",
    name: "Paagal",
    artist: "Baadshah",
    link: "https://i.pinimg.com/originals/25/1e/eb/251eeb6b17b2a80f19ea429bf0fa804b.jpg",
  },
  {
    song: new Audio("/ASSETS/SONGS/Nashe Si Chad Gayi.mp3"),
    mood: "Party",
    name: "Nashe Si Chad gayi",
    artist: "Arjit Singh",
    link: "https://im.indiatimes.in/content/itimes/video/2016/Oct/18/1476779662-befikre-new-song-nashe-si-chadh-gayi-featuring-ranveer-singh-vaani-kapoor.jpg",
  },
  {
    song: new Audio("/ASSETS/SONGS/party all night.mp3"),
    mood: "Party",
    name: "Party All Night",
    artist: "Honey Singh",
    link: "https://th.bing.com/th/id/OIP.cFWKvlYGpN-TJXCf5pvffQHaFj?pid=ImgDet&rs=1",
  },
  {
    song: new Audio("/ASSETS/SONGS/Naacho.mp3"),
    mood: "Party",
    name: "Naacho",
    artist: "Vishal Mishra",
    link: "https://th.bing.com/th/id/OIP.SHRmEpdaKtDC2tcbt3Fa4wHaEK?pid=ImgDet&rs=1",
  },
  {
    song: new Audio("/ASSETS/SONGS/Enna Sona.mp3"),
    mood: "Sad",
    name: "Enna Sona",
    artist: "Arjit Singh",
    link: "https://img.youtube.com/vi/mrdRHsIkK_c/maxresdefault.jpg",
  },
  {
    song: new Audio("/ASSETS/SONGS/Baarishein.mp3"),
    mood: "Sad",
    name: "Baarishein",
    artist: "Anuv Jain",
    link: "https://i.pinimg.com/736x/68/8a/1b/688a1b874324947e7c424a3419e0cde5.jpg",
  },
  {
    song: new Audio("/ASSETS/SONGS/Aya na tu.mp3"),
    mood: "Sad",
    name: "Aya Na Tu",
    artist: "Arjun Kanungo",
    link: "https://c.saavncdn.com/806/Aaya-Na-Tu-Hindi-2018-20190924060933-500x500.jpg",
  },
  {
    song: new Audio("/ASSETS/SONGS/Kabira.mp3"),
    mood: "Sad",
    name: "Kabira",
    artist: "Arjit Singh",
    link: "https://1.bp.blogspot.com/-B54Dgst2QyU/XvDNgXMEBUI/AAAAAAAAAsw/yLfGl_jGN_IE76rLaDPe79y4OgnNkCYRgCLcBGAsYHQ/w1200-h630-p-k-no-nu/kabiraa.jpg",
  },
  {
    song: new Audio("/ASSETS/SONGS/Ranjha.mp3"),
    mood: "Sad",
    name: "Ranjha",
    artist: "B Praak",
    link: "https://pagaliworld.com/siteuploads/thumb/sft7/3276_4.jpg",
  },
  {
    song: new Audio("/ASSETS/SONGS/Lahore.mp3"),
    mood: "Punjabi",
    name: "Lahore",
    artist: "Guru Randhawa",
    link: "https://th.bing.com/th/id/OIP.aLJpI34iQlpC82TgFyyJzQAAAA?pid=ImgDet&rs=1",
  },
  {
    song: new Audio("/ASSETS/SONGS/Gaal Ni Kadni.mp3"),
    mood: "Punjabi",
    name: "Gaal Ni Kadni",
    artist: "Parmish Verma",
    link: "https://th.bing.com/th/id/OIP.HNPvnlHPyOJx9iBifve3iAHaHa?pid=ImgDet&rs=1",
  },
  {
    song: new Audio("/ASSETS/SONGS/Prada.mp3"),
    mood: "Punjabi",
    name: "Prada",
    artist: "Jass Manak",
    link: "https://i1.wp.com/lyricsraag.com/wp-content/uploads/2018/05/thumb-original-PRADA-JASS-MANAK.jpg?fit=1280%2C720&ssl=1",
  },
  {
    song: new Audio("/ASSETS/SONGS/Cheques.mp3"),
    mood: "Punjabi",
    name: "Cheque",
    artist: "Shubh",
    link: "https://th.bing.com/th/id/OIP.yb1oVULfcVFkUD6MB0TCbwHaHa?pid=ImgDet&rs=1",
  },
  {
    song: new Audio("/ASSETS/SONGS/Rubicon Drill.mp3"),
    mood: "Punjabi",
    name: "Rubicon Drill",
    artist: "Parmish Verma",
    link: "https://a10.gaanacdn.com/gn_img/albums/ZaP37OR3Dy/P37OJM2x3D/size_m.jpg",
  },
  {
    song: new Audio("/ASSETS/SONGS/Rubicon Drill.mp3"),
    mood: "Happy",
    name: "Rubicon Drill",
    artist: "Parmish Verma",
    link: "https://a10.gaanacdn.com/gn_img/albums/ZaP37OR3Dy/P37OJM2x3D/size_m.jpg",
  },
  {
    song: new Audio("/ASSETS/SONGS/dena-ho-to-dijiye-janam-janam.mp3"),
    mood: "Bhajan",
    name: "Dena Ho to Dijiye",
    artist: "",
    link:"https://a10.gaanacdn.com/images/albums/35/1504535/crop_480x480_1504535.jpg"
  }
  ,
  {
    song: new Audio("/ASSETS/SONGS/Koi Jaaye Jo Vrindavan - PagalRingtone.Com.mp3"),
    mood: "Bhajan",
    name: "Koi Jaaye Jo Vrindavan",
    artist: "",
    link:"https://a10.gaanacdn.com/images/albums/35/1504535/crop_480x480_1504535.jpg"
  }
  ,
  {
    song: new Audio("/ASSETS/SONGS/Saanwara - Maanya Arora, Shubham Bajoria - Krishna Bhajan.mp3"),
    mood: "Bhajan",
    name: "Jiski Naiya Sambhale",
    artist: "",
    link:"https://a10.gaanacdn.com/images/albums/35/1504535/crop_480x480_1504535.jpg"
  }
  

];
let categoryList = [];
function addSong(a,b,v,d){
  c = `${b}${v}`
  const node2 = document.createElement('img')
  node2.src = `${d}`
  const node1 = document.createElement("li");
  const textNode = document.createTextNode( `${v}`+')'+' '+a)
  node1.appendChild(node2)
  node1.appendChild(textNode)
  node1.setAttribute("class",`songName songStyle ${b} ${c} ${v}`);
  node1.setAttribute("id", `${a}`);
  document.getElementById("ul").appendChild(node1)
}
i = 1 
for( a of songlist){
  detector = 0 
  for(let f = 0 ; f < i ; f++){
    if(categoryList[f]==a.mood){
      detector = 1 ;
      break
    }
  }
  if(detector == 0){
    categoryList.push(a.mood)
    i++
  }
}
for( a of categoryList){
  const node = document.createElement('li')
  const textNode = document.createTextNode(a)
  node.appendChild(textNode)
  node.setAttribute('class','category')
  node.setAttribute('id',`${a}`)
}
let category = document.getElementsByClassName('category')
v = 1 
Array.from(categoryList).forEach(element=>{

  for(a of songlist){
    if(element == a.mood){
      addSong(a.name , a.mood , v,a.link)
      v++
    }
}

})

let s = '0123456789ABCDEF'
setInterval(()=>{
  let cons = '#'
  for(let i = 0 ; i < 6 ; i++){
    cons = cons + s[Math.floor(Math.random()*16)]
  }
  document.getElementById('body').style.backgroundColor = cons 
},500)
let createPlaylist = document.getElementById('create')
let submit = document.getElementById('credentialSubmit')
createPlaylist.addEventListener('click',()=>{
  document.getElementById('credential').style.display = 'flex'
})
let songs = document.getElementsByClassName('songStyle')
let playlist = [];
submit.addEventListener('click',()=>{
  let a = document.getElementById('playlistName').value 
  let b = {}
  b.name = a ;
  
})
Array.from(songs).forEach(element,()=>{
  element.addEventListener('click',()=>{

  })
})


