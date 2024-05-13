

export const uploadToCloudinary = async (img) => {
    const data = new FormData()
    data.append('file', img)
    data.append('upload_preset', 'ml_default')
    data.append('cloud_name', 'dmhxcjyna')

    try {

      const res = await fetch('https://api.cloudinary.com/v1_1/dmhxcjyna/image/upload', {
        method: 'post',
        body: data
      })
      const file = await res.json()
      return file.url.toString()
    }
    catch(error) {
      console.log(error)
    }
  }