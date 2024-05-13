export const serializePhoto = (img: string) => { 
    let newFile = {
      uri:   img, 
      type: `test/${img.split(".")[1]}`, 
      name: `test.${img.split(".")[1]}`
    }
    return newFile
  }
 