const openai=require('../config/openaiConfigaration')

const generateImage=async (desc) => {
     const image=await openai.images.generate({
        model:"dall-e-3",
        prompt:desc,
        n: 1,
        size:"1024x1024",
        style:"vivid"
     })
     console.log("generation success:\n",image.data)
}
module.exports={generateImage}