function enablePhotoUpload() {
  const imageInput = document.querySelector("#image-input")
  imageInput.addEventListener("change", function(){
    const reader = new FileReader()
    reader.addEventListener("load", ()=>{
      const uploadImage = reader.result
      changeMemePicture(uploadImage)
      // document.querySelector("#display-image").style.backgroundImage = `url(${uploadImage})`
    }) 
    reader.readAsDataURL(this.files[0])
  })
}

async function mapImageList(){
  const memesObject = [
    {
      "name": "chapolin",
      "path": "pictures/chapolin.jpg"
    },
    {
      "name": "chapolin1",
      "path": "pictures/chapolin1.jpg"
    },
    {
      "name": "chapolin2",
      "path": "pictures/chapolin2.jpg"
    },
    {
      "name": "chapolin3",
      "path": "pictures/chapolin3.png"
    },
    {
      "name": "chloe",
      "path": "pictures/chloe.jpg"
    },
    {
      "name": "funny-cat1",
      "path": "pictures/funny-cat1.jpg"
    },
    {
      "name": "funny-cat2",
      "path": "pictures/funny-cat2.jpg"
    },
  ]
  return memesObject
}

async function createGallery(imageList){
  const memeSelector = document.querySelector("#memes-list")
  imageList.forEach(picture => {
    let newOption = document.createElement("option")
    newOption.text = picture.name.toUpperCase()
    newOption.value = picture.path
    memeSelector.appendChild(newOption)
  });
}

async function changeMemePicture(photo){
  let displayImage = document.querySelector("#display-image")
  displayImage.style.backgroundImage = `url('${photo}')`
}

async function main(){
  const memesImageList = await mapImageList()
  enablePhotoUpload()
  await createGallery(memesImageList)
  await changeMemePicture(memesImageList[4].path)
}

main()